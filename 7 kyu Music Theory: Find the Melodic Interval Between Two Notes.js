function getInterval(note1, note2) {
    var note = [];
    var notes = ["C", "D", "E", "F", "G", "A", "B"];
    for(var i = 0; i < 9; i++){
        for(var j = 0; j < 7; j++){
            note.push(notes[j] + i);
        }
    }
    return Math.abs(note.indexOf(note1) - note.indexOf(note2)) + 1;
}