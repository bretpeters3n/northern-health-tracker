const User = require("./User");
const Calories = require("./Calories");
const Sleep = require("./Sleep");
const Water = require("./Water");
const Exercise = require("./Exercise");

//create associations
User.hasOne(Calories, {
  foreignKey: "user_id",
});

User.hasOne(Sleep, {
  foreignKey: "user_id",
});

User.hasOne(Water, {
  foreignKey: "user_id",
});

User.hasOne(Exercise, {
  foreignKey: "user_id",
});

// User to User relationships
// Use Literals from ORM?
// Can we make the user to user relationship automatically or do we have ot make

module.exports = { User, Calories, Sleep, Water, Exercise };
