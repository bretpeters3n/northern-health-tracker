const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Logs extends Model {}

Logs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    day: {
        type: DataTypes.DATE,
        allowNull: false,
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
