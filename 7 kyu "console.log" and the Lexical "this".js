const realConsole = console.log;
console.log = (value) => {
    this.answer = value;
    realConsole(value);
}