function helpJesse(array) {
    return array.map(x => `Pour ${x.amount} mL of ${x.solution} into a ${x.instrument}${x.note ? ' (' + x.note + ')' : ''}`);
}