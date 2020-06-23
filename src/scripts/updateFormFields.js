const updateFormFields = () => {
  // Get reference to input fields in the form
  document.querySelector("#hidden").value = "";
  document.querySelector("#Date").value = "";
   document.querySelector("#ConceptsCovered").value = "";
  document.querySelector("#journalEntry").value = "";
 document.querySelector("#Mood").value = "Happy";
  

//   hiddenEntryId.value = entryObj.id;
//   Date.value = entryObj.Date;
//   ConceptsCovered.value = entryObj.ConceptsCovered;
//   content.value = entryObj.concepts;
//   mood.value = entryObj.mood;
};

export default updateFormFields;
