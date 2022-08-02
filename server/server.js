const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = "inventory_db";

//Middleware
app.use(cors(), express.json(), express.urlencoded({extended:true}));

//DB Connection
require("./config/mongoose.config")(DB)


app.listen(PORT, () => {
    console.log(`SERVER IS UP ON: ${PORT}`)
})