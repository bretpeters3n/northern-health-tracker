const User = require("./User");
const Logs = require("./Logs");

//create associations

Logs.belongsTo(User, {
  foreignKey: "user_id",
})



// User to User relationships
// Use Literals from ORM?
// Can we make the user to user relationship automatically or do we have ot make

module.exports = { User, Logs };
