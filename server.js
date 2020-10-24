const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static front-end files: match route
app.use(express.static('public'))

// Allows you to read req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// const routes = require("./routes");
app.use(require("./routes"))

app.listen(PORT, function () {
    console.log("http://localhost:" + PORT)
})