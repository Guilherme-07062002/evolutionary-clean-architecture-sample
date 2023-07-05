import express from "express"
// import { Sequelize } from "sequelize"

const app = express()

// const sequelize = new Sequelize("bd", "user", "12345", {
//     dialect: "sqlite",
//     host: "bd.sqlite"
// })

// sequelize.sync().then(() => console.log("Conexão bem sucedida ao database."));

app.listen(3000, () => {
    console.log('Server running on port 3000.')
})
