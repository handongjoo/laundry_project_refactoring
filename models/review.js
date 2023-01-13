'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init({
    customerId: {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    supplierId: {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    content: {
      type : DataTypes.TEXT,
      allowNull : false
    },
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};