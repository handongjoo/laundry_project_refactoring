'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init({
    customerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nickname: {
      type : DataTypes.STRING,
      allowNull : false
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false
    },
    cellphone: {
      type : DataTypes.STRING,
      allowNull : false
    },
    point: {
      type : DataTypes.INTEGER,
      defaultValue : 1_000_000
    },
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};