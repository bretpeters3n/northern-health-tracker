const User = require("./User");
const Logs = require("./Logs");
const Contact = require("./Contact");

//create associations

Logs.belongsTo(User, {
  foreignKey: "user_id",
})

Contact.belongsTo(User, {
  foreignKey: "user_id",
})

module.exports = { User, Logs, Contact };
