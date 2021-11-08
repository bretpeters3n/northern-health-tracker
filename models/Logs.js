const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Logs extends Model { }

Logs.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "user",
        key: "id",
      },
    },
    day: {
      type: DataTypes.DATEONLY,
      primaryKey: true,
    },
    calorie: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "count",
    },
    exercise: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "minutes",
    },
    sleep: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "hours",
    },
    water: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "glasses",
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "logs",
  }
);

module.exports = Logs;
