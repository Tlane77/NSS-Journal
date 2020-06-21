const API = {
  getJournalEntries: () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
  },

  saveJournalEntry: (newEntryObject) => {
    return fetch("http://localhost:8088/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEntryObject)
    })
  }
}
// export default JournalEntries
export default API











