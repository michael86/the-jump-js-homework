const o = {

    firstName: 'Hichael',
    lastName: 'Hodgson',

    get fullname() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullname(fullname) {
        const names = fullname.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
    }


}

console.log(o.fullname);
o.fullname = "John Doe";
console.log(o.fullname);