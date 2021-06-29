const util = require("util");
const fs = require("fs");


const readFileSync = util.promisify(fs.readFile);
const writeFileSync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileSync("db/db.json");
    }
    write(note) {
    return writeFileSync("db/db.json", JSON.stringify(note))
    };


    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes))
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        }
            
        )};
    


    addNote(note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error("Title/Text Error");
        }
        
        const newNote = {title, text}
        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote);
    };

    deleteNote(id) {
        //app.delete(title, text);

        return this.getNotes()
        .then((notes) => parsedNotes = [])

    };

    handleNoteSave() {
        return this.getNotes()
        .then((notes) => [...notes, saveNote()])
        .then((saveNote) => this.write(saveNote))
        .then(() => newNote);
    }



};

    module.exports = new Store();