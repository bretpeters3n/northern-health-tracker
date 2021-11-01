// Psuedo coding Routes

// Index Route
// No DB depedent

// Sign Up Route
// No DB depedent

// Login Route
// No DB depedent

// Dashboard Route
// 4 form fields for coresponding values we are asking for
// submit button

// Submit Form Route
// Send all User values (4) to DB

// Update Values Route
// Send all User values (4) to DB

// Delete Values Route
// Send all User values (4) to DB

// Dashboard with info
// Access All data (4) from the User
// Access all data (4) from every other User

// Logout
// No DB depedent

// Models
// User Model
// Email and Password

// Water Model
// Amount daily (5)
// User id

// Calories Model (5)
// Amount
// User id

// Sleep Model (5)
// Amount
// User id

// Exercise Model (5)
// Amount
// User id

const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");

// Import the custom helper methods
const helpers = require("./utils/helpers");

// 'process.env.PORT' was added for production environments
const PORT = process.env.PORT || 3001;
const app = express();

// Set up sessions with cookies
const sess = {
  secret: "Super secret secret",
  cookie: {
    // Stored in milliseconds (86400 === 1 day)
    maxAge: 86400,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Incorporate the custom helper methods
const hbs = exphbs.create({ helpers });

// get handlebars up and running
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
