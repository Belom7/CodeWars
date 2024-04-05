class Singleton {
    constructor() {
        return Singleton.inst = Singleton.inst ? Singleton.inst : this;
    }
}