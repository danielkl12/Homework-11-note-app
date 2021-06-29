
const fs = require("fs");
const path = require("path");
const store = require("./db/store.js")
const router = require("express").Router();

router.get('/api/notes', (req, res) => {
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
    if (err) throw (err);
});

router.post('/api/notes', (req, res) => {
    store
        .addNote(req.body)
        .then((note) => res.json(note))
    if (err) throw (err);
});


//html routes

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});


module.exports = router;