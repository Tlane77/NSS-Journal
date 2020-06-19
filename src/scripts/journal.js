console.log("You are Wonderfully Special!!") 

import API from "./Data.js";
import journalEntryList from "./EntryList.js";

import createJournalEntry from "./createEntry.js";
// import renderJournalEntries from "./EntryList.js";

API.getJournalEntries().then((response) => journalEntryList(response));

document.querySelector;


const submitButton = document.querySelector("#save")

let Date;
let ConceptsCovered;
let content;
let mood;

submitButton.addEventListener("click", e => {
  console.log(e, "event")


  Date = document.querySelector("#Date").value,
    ConceptsCovered = document.querySelector("#ConceptsCovered").value,
    content = document.querySelector("#journalEntry").value,
    mood = document.querySelector("#Mood").value
    
  if (Date === "" || ConceptsCovered === "" || content === "" || mood === "") {
    alert("Please Insert Journal Entry Data Before Submitting")

  } else {
    const newEntry = createJournalEntry(date, concepts, content, mood);
    journalAPI.saveJournalEntry(newEntry).then(() => {
      return journalAPI.getJournalEntries()
    }).then((journalObj) => {
      return newJournalEntry.journalEntryConverter(journalObj)
    })
  }
})   


