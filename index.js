const app = require("./app")
const env = require('dotenv').config()
const PORT = process.env.API_PORT ;

app.listen(PORT, () => [
    console.log(`app is running ${PORT}`)
])