const router = require("express").Router()
const fs = require("fs");
const path = require("path");
const DB_DIR = path.join(__dirname, '../db/db.json');

// Read the file each time the function is called. Fresh data each time
const getDB = () => JSON.parse(fs.readFileSync(DB_DIR, 'utf8'));
// Writes the updated database to DB in string datatype
const setDB = (obj) => fs.writeFileSync(DB_DIR, JSON.stringify(obj))


router.get("/notes", function (req, res) {
    const notes = getDB();

    res.json(notes)
})

router.post("/notes", function (req, res) {
    const notes = getDB();
    const newNote = req.body;

    // assign newNote and id!
    newNote.id = '?'
    
    notes.push(newNote)
    setDB(notes)

    res.json(newNote);
})

router.delete("/notes/:id", function(req, res){
    const notes = getDB();
    const id = req.params.id;
    
    // remove note with matching id    
    
    setDB(notes);
    res.json(newNote);
})

module.exports = router;