// bringing in requirements, sequelize helps to navigate databases easily
const { Model, DataTypes } = require('sequelize');
// this connects the "connection" file to this one
const sequelize = require('../config/connection.js');

// Category is the main one, product goes into it and product tag goes into product
class Category extends Model {}

// categories
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
