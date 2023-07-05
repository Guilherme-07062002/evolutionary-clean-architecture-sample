import express from "express"
import { Sequelize } from "sequelize"

const cors = require('cors')
const Routes = require('./routers/indexRoutes.js')
const app = express()

const sequelize = new Sequelize("bd", "user", "12345", {
    dialect: "sqlite",
    host: "bd.sqlite"
})

app.use(cors())
app.use(express.json())
app.use('', Routes)

sequelize.sync().then(() => console.log("Conexão bem sucedida ao database."));
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.')
})
