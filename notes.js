const chalk = require('chalk')
const fs = require('fs');

exports.getNotes = () => {
    try {
        const unparsedData =  fs.readFileSync('notes.json', 'utf8')
        const data = JSON.parse(unparsedData)
        return data
    } catch (e) {
        return []
    }
}

exports.addNote = (title, body) => {
    const notes = this.getNotes()

    if(notes.find(note => note.title === title)) {
        console.log(chalk.red.inverse('Title must be unique!!!'))
        return
    }

    notes.push({
        title,
        body,
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('Note added successfully'));
}

exports.removeNote = (title) => {
    const notes = this.getNotes()
    const noteToBeRemoved = notes.find(note => note.title === title)
    if(!noteToBeRemoved) {
        console.log(chalk.red.inverse("Note doesn't exist"));
        return
    }
    const noteIndex = notes.indexOf(noteToBeRemoved)
    notes.splice(noteIndex,1)
    saveNotes(notes)
    console.log(chalk.green.inverse('Note removed successfully'));
}

exports.listNotes = () => {
    const notes = this.getNotes()
    if(!notes.length) {
        console.log(chalk.red.inverse("No notes to display"))
        return
    }
    debugger
    console.log(chalk.bold('Notes :'));
    notes.forEach((note, index) => {
        console.log(`${index + 1} - ${chalk.yellow(note.title)}: ${chalk.italic(note.body)}`);
    })
}

exports.readNote = (title) => {
    const notes = this.getNotes()
    const noteToBeRead = notes.find(note => note.title === title)
    if(!noteToBeRead) {
        console.log(chalk.red.inverse("Note doesn't exist"));
        return
    }
    console.log(`${chalk.yellow(noteToBeRead.title)}: ${chalk.italic(noteToBeRead.body)}`)
}

const saveNotes = (notes) => {
    const notesJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJson)
}

