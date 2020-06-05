let journalEntries = []

const getJournalEntries = () => {
    return fetch("http://localhost:8088/journalEntry")
      .then((httpResponse) => {
        return httpResponse.json();
      })
      .then((arrayOfEntries) => {
        journalEntries = arrayOfEntries;
      });
}