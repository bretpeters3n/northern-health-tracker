const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Post model
class Sleep extends Model {}

// create fields/columns for Post model
Sleep.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    mon_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tues_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    wed_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    thurs_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fri_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sat_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sun_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "sleep",
  }
);

module.exports = Sleep;
