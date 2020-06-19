import makeJournalEntryComponent from "./entryComponent.js"


// const entryContainer = document.querySelector("#entryContainer");
const journalEntryList = (journalEntries) => {

    

    // create an iterate on the list
    for (const journalObject of journalEntries) {
        let journalHTML = makeJournalEntryComponent(journalObject)
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTML
    }
}  

// getJournalEntries().then(
//     () => { journalEntryList();}
// )

 export default journalEntryList;