/// <reference path="PersonClass.ts"/>

module MyModule {
    export class AddressClass {
        public address : string;
        public personInfo : Person;
        constructor(address:string, personinfo:Person) {
            this.address = address;
            this.personInfo = personinfo;
        }
    }
}