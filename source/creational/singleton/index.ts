
class Person {
    private static instance: Person;
    constructor() {
        if (typeof Person.instance === "object") {
            return Person.instance;
        }
        Person.instance = this;
        return this;
    }
    public getInstance(): Person {
        return this;
    }
}

export default Person;
