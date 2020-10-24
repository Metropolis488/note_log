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
    newNote.id = notes.length +1;
    
    notes.push(newNote)
    setDB(notes)

    res.json(newNote.id);
    getDB();
})

router.delete("/notes/:id", function(req, res){
    const notes = getDB();
    const id = req.params.id;
    
    // remove note with matching id
    for (var i = 0; i < notes.length; i++) {
        if (id == notes[i].id) {
            notes.splice(i, 1);
        }
    }
    console.log(id);
    setDB(notes);
    res.json(notes);
})

module.exports = router;