const chalk = require("chalk");
const notes = require("./notes");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Adds a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Removes a note",
  builder: {
    title: {
      discribe: "Note title to be removed",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "Lists notes",
  handler: () => {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Reads notes",
  builder: {
    title: {
      discribe: "Note title to be read",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

yargs.parse();

// console.log(yargs.argv);
