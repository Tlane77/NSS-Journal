/*
    This function will convert a single journal object to an
    HTML representation and return it
*/
const makeJournalEntryComponent= (journalEntry) => {
  const journalEntryHTMLRepresentation = `<section class="journal">

        <div class="journal__details">
        <h2 id="title--${journalEntry.id}">${journalEntry.concepts}</h2>
        
            <ul>
                <li>Date: ${journalEntry.date}</li>
                <li>Concepts: ${journalEntry.concepts}</li>
                <li>Content: ${journalEntry.content}</li>
                <li>Mood: ${journalEntry.mood}</li>
            </ul>
            <button name="edit-button" value="editEntry--${journalEntry.id}">Edit</button>
	          <button name="delete-button" value="deleteEntry--${journalEntry.id}">Delete</button>
       </div>
    
    </section>`;

  return journalEntryHTMLRepresentation;
  
};
export default makeJournalEntryComponent;
