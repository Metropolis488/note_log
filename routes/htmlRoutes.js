const router = require("express").Router()
const path = require("path")
const fs = require('fs')

router.get("/notes", function (req, res) {
    const PATH = path.join(__dirname, '../public/notes.html')

    res.sendFile(PATH)
})

router.get("*", function (req, res) {
    const PATH = path.join(__dirname, '../public/index.html')

    fs.readFile(PATH, 'utf8', function (err, html) {
        if (err) throw err;

        res.send(html)
    })
})

module.exports = router;