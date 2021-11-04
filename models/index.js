const User = require("./User");
const Logs = require("./Logs");

//create associations

Logs.belongsTo(User, {
  foreignKey: "user_id",
})

module.exports = { User, Logs };
