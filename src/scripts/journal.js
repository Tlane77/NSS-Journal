console.log("You are Wonderfully Special!!");

import API from "./Data.js";
import journalEntryList from "./EntryList.js";
import createJournalEntry from "./createEntry.js";
import updateFormFields from "./updateFormFields.js";

API.getJournalEntries().then((response) => journalEntryList(response));

const submitButton = document.querySelector("#save");

let Date;
let ConceptsCovered;
let content;
let mood;
let hiddenEvent;

submitButton.addEventListener("click", (e) => {
  console.log(e, "event");

  Date = document.querySelector("#Date").value,
    ConceptsCovered = document.querySelector("#ConceptsCovered").value,
    content = document.querySelector("#journalEntry").value,
    mood = document.querySelector("#Mood").value,
    hiddenEvent = document.querySelector("#hidden").value;
  if (hiddenEvent !== "") {
    let editedEntry = createJournalEntry(Date, ConceptsCovered, content, mood)
    API.editEntry(hiddenEvent, editedEntry).then((response) => {
      API.getJournalEntries().then((response) => journalEntryList(response))
    });
    updateFormFields()
  } else {
    if (Date === "" || ConceptsCovered === "" || content === "" || mood === "") {
      alert("Please Insert Journal Entry Data Before Submitting");
    } else {
      const newEntry = createJournalEntry(Date, ConceptsCovered, content, mood);
      API.saveJournalEntry(newEntry).then((response) => {
        API.getJournalEntries().then((response) => journalEntryList(response));
      })
    }
  }
  });



  
export default API;
