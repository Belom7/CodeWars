class Class {
    static #last = -1;
    static getNumber() {
        return Math.pow(2, ++Class.#last);
    }
}