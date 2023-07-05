import express from "express"
import setupRoutes from "./main/config/setup-routes"

const app = express()

app.use(express.json())
setupRoutes(app)

app.listen(3000, () => {
    console.log('Server running on port 3000.')
})
