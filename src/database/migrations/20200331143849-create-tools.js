module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('tools', {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false,
    },
    link: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    tags: {
      type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.STRING),
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('tools'),
};
