document.getElementById('blog-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const entryText = document.getElementById('entry-text').value;
    addJournalEntry(entryText);
    document.getElementById('entry-text').value = '';
});

function addJournalEntry(text) {
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('journal-entry');
    entryDiv.textContent = text;
    document.getElementById('journal-entries').appendChild(entryDiv);
}