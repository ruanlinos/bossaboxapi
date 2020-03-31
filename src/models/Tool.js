const { Model, DataTypes } = require('sequelize');

class Tool extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      link: DataTypes.STRING,
      tags: DataTypes.ARRAY(DataTypes.STRING),
    }, {
      sequelize,
    });
  }
}

module.exports = Tool;
