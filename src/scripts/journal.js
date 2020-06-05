/*
    This function will convert a single journal object to an
    HTML representation and return it
*/
const journalEntryConverter = (journalObject) => {

    const journalHTMLRepresentation = `<section class="journal">
       
        <div class="journal__details">
            <ul>
                <li>Date: ${journalObject.date}</li>
                <li>Concepts: ${journalObject.concepts}</li>
                <li>Content: ${journalObject.content}</li>
                <li>Mood: ${journalObject.mood}</li>
                
            </ul>
        </div>
    </section>`

    return journalHTMLRepresentation

}
 