module MyModule {
    export class Person {
        public name : string;
        constructor(name:string) {
            this.name = name;
        }
    }

    export class PersonDetails {
        public personDetails : Person;
        constructor(person:Person) {
            this.personDetails = person;
        }
    }
}