/// <reference path="./includes/jasmine.d.ts"/>
/// <reference path="../src/AddressClass.ts"/>

describe("address-tests", () => {
    it("should have two parameter in constructor", () => {
        var personInfo = new MyModule.Person('person1');
        var t = new MyModule.AddressClass('gurgaon,india', personInfo)
        expect(t.address).toBe('gurgaon,india');
        expect(t.personInfo).toBe(personInfo);

    });
});