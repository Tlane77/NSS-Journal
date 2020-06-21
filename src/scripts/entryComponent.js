
//content to entryComponent.js








/*
    This function will convert a single journal object to an
    HTML representation and return it
*/
const makeJournalEntryComponent= (journalEntry) => {
  const journalEntryHTMLRepresentation = `<section class="journal">
]
        <div class="journal__details">
        
            <ul>
                <li>Date: ${journalEntry.date}</li>
                <li>Concepts: ${journalEntry.concepts}</li>
                <li>Content: ${journalEntry.content}</li>
                <li>Mood: ${journalEntry.mood}</li>
                
            </ul>
       </div>
    
    </section>`;

  return journalEntryHTMLRepresentation;
  
};
export default makeJournalEntryComponent;
