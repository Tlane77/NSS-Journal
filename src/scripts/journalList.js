const journalEntryList = () => {

    

    // create an iterate on the list
    for (const journalObject of journalEntries) {
        let journalHTML = journalEntryConverter(journalObject)
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTML
    }
}  

getJournalEntries().then(
    () => { journalEntryList();}
)