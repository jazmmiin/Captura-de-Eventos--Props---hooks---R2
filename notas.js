const noteContent = document.getElementById('note-content');
let timeoutId = null;
let saveTimeout = 2000; // 2 seg.

noteContent.addEventListener('input', function() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(saveNote, saveTimeout);
});

function saveNote() {
  const noteText = noteContent.value;
  console.log(`Saving note: ${noteText}`);
  localStorage.setItem('note', noteText);
}