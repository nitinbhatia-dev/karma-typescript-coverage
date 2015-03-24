var MyModule;
(function (MyModule) {
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    })();
    MyModule.Person = Person;

    var PersonDetails = (function () {
        function PersonDetails(person) {
            this.personDetails = person;
        }
        return PersonDetails;
    })();
    MyModule.PersonDetails = PersonDetails;
})(MyModule || (MyModule = {}));
/// <reference path="PersonClass.ts"/>
var MyModule;
(function (MyModule) {
    var AddressClass = (function () {
        function AddressClass(address, personinfo) {
            this.address = address;
            this.personInfo = personinfo;
        }
        return AddressClass;
    })();
    MyModule.AddressClass = AddressClass;
})(MyModule || (MyModule = {}));
