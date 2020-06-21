const createJournalEntry = (date, concepts, content, mood) => {
  const newJournalEntry = {
    "date": date,
    "concepts": concepts,
    "content": content,
    "mood": mood
  };

  return newJournalEntry;
};

export default createJournalEntry;
