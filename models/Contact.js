const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Contact extends Model {}

Contact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    message: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "hours",
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "contact",
  }
);

module.exports = Contact;