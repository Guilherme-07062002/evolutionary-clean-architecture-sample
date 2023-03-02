const express = require('express')
const sequelize = require('./config/database')
const cors = require('cors')

const Routes = require('./routers/indexRoutes.js')

const app = express()

sequelize.sync().then(() => console.log("Conexão bem sucedida ao database."));

app.use(cors())
app.use(express.json())

app.use('', Routes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.')
})