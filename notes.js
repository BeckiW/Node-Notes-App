console.log('Starting notes.js')

const fs = require('fs');

let addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  }

  //fetch the notes
  try {
    let notesString =fs.readFileSync('note-data.json')
    notes = JSON.parse('notesString');
  } catch(e) {

  }

  let duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0) {
    //update notes
    notes.push(note);

    //save notes
    fs.writeFileSync('note-data.json', JSON.stringify(notes))
  }


};

let getAll = () => {
  console.log('Getting all notes')
}

let getNote = (title) => {
  console.log('Getting note', title);
}

let removeNote = (title) => {
  console.log('Removing note', title);
}


module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
