const {Sequelize} = require('sequelize')

//create sequelize object
const sequelize =  new Sequelize(
    'online-store', // DB name
    process.env.DB_USER, // User
    process.env.DB_PASSWORD, // Пароль
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }
)

module.exports = sequelize