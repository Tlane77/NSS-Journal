const url = "http://localhost:8088";
///Go to json, get from json, put in json, 
const API = {
  getJournalEntries: () => {
    return fetch("http://localhost:8088/entries").then((response) =>
      response.json()
    );
  },
  saveJournalEntry: (newEntryObject) => {
    return fetch("http://localhost:8088/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntryObject),
    }).then((response) => response.json());
  },
  getSingleEntry: (id) => {
    return fetch(`${url}/entries/${id}`).then((response) => response.json());
  },
  editEntry: (id, editEntryObj) => {
    return fetch(`${url}/entries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editEntryObj),
    });
  },
  deleteEntry: (target) => {
    return fetch(`${url}/entries/${target}`, {
      method: "DELETE",
    }).then((response) => response.json());
  },
};

// export default JournalEntries
export default API;
