import fs from "fs";
import chalk from "chalk";

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.bold("New note added!"));
  } else {
    console.log(chalk.red.bold("Note title taken!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title != title);

  if (newNotes.length != notes.length) {
    saveNotes(newNotes);
    console.log(chalk.green.bold("Note deleted!"));
  } else {
    console.log(chalk.red.bold("Note does not exist!"));
  }
};

const listNotes = () => {
  console.log(chalk.green("Your notes..."));
  const notes = loadNotes();
  var i = 1;
  const notesList = notes.forEach((note) => {
    console.log(i + ". " + note.title);
    i++;
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const desiredNote = notes.find((note) => note.title === title);

  if (!desiredNote) {
    console.log(chalk.red("Note does not exist!"));
  } else {
    console.log(chalk.green(desiredNote.title));
    console.log(desiredNote.body);
  }
};

export { getNotes, addNote, removeNote, listNotes, readNote };
