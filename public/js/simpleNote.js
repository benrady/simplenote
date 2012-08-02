function saveNote() {
  $("#note-header input").focus();
}

$(function(arg) {
  $("#note-header button").click(saveNote);
});
