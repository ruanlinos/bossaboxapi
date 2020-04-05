require('dotenv/config');

module.exports = {
  development: {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
      timestamps: true,
      underscored: true,
    },
  },
  production: {
    dialect: 'postgres',
    host: process.env.DATABASE_URL,
    username: process.env.DB_PROD_USER,
    password: process.env.DB_PROD_PASS,
    database: process.env.DB_PROD_NAME,
    define: {
      timestamps: true,
      underscored: true,
    },
  },
};
