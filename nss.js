/*

// var el = document.getElementById('overlayBtn');
if(el){
  el.addEventListener('click', swapper, false);
}

*/
let journalEntryArray = []

document.getElementById('record').addEventListener('click', e => {
    e.preventDefault;
    let journalObject = logEntry();
    addJournalEntry(journalObject);
    console.log(journalEntryArray);
})


function logEntry() {
    let journalEntry = {};
    let log = ["journal-date", "concepts-covered", "journal-entries", "todays-mood"];
    for (let i = 0; i < log.length; i++) {
        let entry = log[i]
        let value = document.getElementById(entry).value;
        journalEntry[entry] = value

    }
    journalEntryArray.push(journalEntry);
    return journalEntry;
}

function addJournalEntry(journalObject) {
    let date = document.getElementById("date");
    let concepts = document.getElementById("concepts");
    let entries = document.getElementById("entries");
    let mood = document.getElementById("mood");
    clearJournal(date, concepts, entries, mood);
    date.innerText += String(journalObject["journal-date"]);
    concepts.innerText += String(journalObject["concepts-covered"]);
    entry.innerText += String(journalObject["journal-entry"]);
    mood.innerText += String(journalObject["todays-mood"]);

}

function clearJournal(date, concepts, entries, mood) {
    date.innerText = "";
    concepts.innerText = "";
    entries.innerText = "";
    mood.innerText = "";
}



$(document).ready(function () {
    document.getElementById('textboxid').style.height = "200px";
    document.getElementById('textboxid').style.fontSize = "14pt";

    $(".dropdown").click(function () {
        $(".menu").toggleClass("showMenu");
        $(".menu > li").click(function () {
            $(".dropdown > p").html($(this).html());
            $(".menu").removeClass("showMenu");
        });
    });

});