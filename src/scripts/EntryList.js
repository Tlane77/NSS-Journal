import API from './data.js';

import makeJournalEntryComponent from "./entryComponent.js";
import registerListeners from "./journal.js";

const updateForms = (updateObject) => {
  const hiddenEntry = document.querySelector("#hidden")
  const date = document.querySelector("#Date");
  const concepts = document.querySelector("#ConceptsCovered");
  const content = document.querySelector("#journalEntry");
  const mood = document.querySelector("#Mood");
  fetch(`http://localhost:8088/entries/${updateObject}`)
    .then(response => response.json())
    .then(response => {
      hiddenEntry.value = response.id
      date.value = response.date
      concepts.value = response.concepts
      content.value = response.content
      mood.value = response.mood
    })
}



const journalEntryList = (journalEntries) => {
  // create an iterate on the list
  ///Clear out entries so they are not double looped.
  document.querySelector(".entryLog").innerHTML=""
  for (const journalObject of journalEntries) {
    let journalHTML = makeJournalEntryComponent(journalObject);
    const journalArticleElement = document.querySelector(".entryLog");
    journalArticleElement.innerHTML += journalHTML;
  }
  //Begininning of Delete Button
const deleteButton = document.getElementsByName("delete-button");
deleteButton.forEach((button) => {
  button.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.value.startsWith("deleteEntry--")) {
      let target = clickEvent.target.value.split("--")[1];
      API.deleteEntry(target)
        .then(() => API.getJournalEntries())
        .then ((response) => journalEntryList(response))
        // .then((response) => {
        //   if (filtered === "yes") {
        //     let filteredJournal = response.filter((filter) => {
        //       return filter.Mood === allEntries[0].Mood;
        //     });

        //     journalList(filteredJournal);
        //   } else {
        //     journalList(response);
        //   }
        // });
    }
  });
});

const editButton = document.getElementsByName("edit-button");
editButton.forEach(button => {
  button.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.value.startsWith("editEntry--")) {
      // console.log("hey work please")
      let target = clickEvent.target.value.split("--")[1];
      updateForms(target)
      
    }
  });
});




};

// const makeEntryList = () => {
//   entryContainer.innerHTML = "";
//   API.getAllEntries().then((entriesArray) => {
//     //can i get just the entries?
//     const journalEntries = entriesArray.filter((item) => {
//       return item.typeId === 1;
//     });

    /////array method examples

    // const allJournalEntries = entriesArray.map((item) => {
    //   const journalHTML = `<p>${item.name}</p>`;
    //   return journalHTML;
    // });

    // console.log("all names", allJournalEntries);
    // entryContainer.innerHTML += allJournalEntries.join("");

    // const firstEntry = entriesArray.find((item) => {
    //   return item.typeId === 2;
    // });

    // const firstEntry = entriesArray.find(item => {
    // 	return item.desc.includes("Entry");
    // })

    // console.log("firstEntry", firstEntry);

    // console.log("firstEntry", firstEntry);

    // put them on the dom
    // console.log("entries", entries);

    // brownies.forEach(item => {
    // 	entryContainer.innerHTML += makeSweetHTML(item);
    // })

    //loop through the sweetsArray and display on the dom
//     entriesArray.forEach((item) => {
//       entryContainer.innerHTML += makeJournalEntryComponent(item);
//     });

//     //invoke the register delete functionality to add to each item in the list
//     registerListeners.registerListeners();
//   });
// };


// getJournalEntries().then(
//     () => { journalEntryList();}
// )}
export default journalEntryList;
