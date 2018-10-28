console.log('Starting app')

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

let command = argv._[0];
console.log(command);
console.log(process.argv);
console.log('Yargs', argv);


if (command === 'add' ) {
  let note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('Note created')
    console.log('--');
    console.log(`Title: ${note.title}`)
    console.log(`Title: ${note.body}`)
  } else {
    console.log('Note title taken')
  }
} else if (command === 'List' ) {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
}else {
  console.log('Command not recognised')
}
