let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
  const container = document.getElementById("notes-container");
  container.innerHTML = "";

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    const noteText = document.createElement("p");
    noteText.textContent = note;
    noteDiv.appendChild(noteText);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteNote(index);
    noteDiv.appendChild(deleteBtn);

    container.appendChild(noteDiv);
  });
}

function addNote() {
  const input = document.getElementById("note-input");
  const text = input.value.trim();
  if (text !== "") {
    notes.push(text);
    input.value = "";
    saveNotes();
    renderNotes();
  }
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  renderNotes();
}

// Initial render
renderNotes();
