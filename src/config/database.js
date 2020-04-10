require('dotenv/config');

module.exports = {
  development: {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
      timestamps: false,
      underscored: true,
    },
  },
  test: {
    dialect: 'postgres',
    host: process.env.DB_HOST_TEST,
    username: process.env.DB_USER_TEST,
    password: process.env.DB_PASS_TEST,
    database: process.env.DB_NAME_TEST,
    define: {
      timestamps: false,
      underscored: true,
    },
  },
};
