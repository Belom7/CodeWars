const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    get fullName() {
        return `${ this.firstName } ${ this.lastName }`;
    },
    set fullName(name) {
        let [firstName, lastName] = name.split(' ');
        Object.assign(this, { firstName, lastName });
    }
};