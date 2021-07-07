require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()

//connect cors library for app
app.use(cors())
app.use(express.json())

//added router
app.use('/api', router)

//Обработка ошибок, всегда этот middleware подключается последним
app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync() //Сверяет состояние со схемой данных
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`) )
    } catch (e) {
        console.log(e)
    }
}

start()



