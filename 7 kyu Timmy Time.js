function changeTime(input, delta) {
    let [hours, minutes] = input.split(':');
    return new Date(2016, 0, 1, hours, Number(minutes) + delta).toString().slice(16,21);
}