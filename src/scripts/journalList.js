const journalEntryList = () => {

    //const entryList = journalEntry
    const journalEntry = journalEntryList()

    // create an iterate on the list
    for (const journalObject of journalEntry) {
        // convert
        const convertedEntry = makeJournalEntryComponent
        // find location
        const entryLocation = document.querySelector(".entrylog")
        //retreiving location
        entryLocation.innerHTML += convertedEntry
    }

    //find a location
    //const journalHTMLRepresentation = journalConverter(journalObject)

    //place it in the location
}