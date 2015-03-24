/// <reference path="./includes/jasmine.d.ts"/>
/// <reference path="../src/PersonClass.ts"/>

describe("person-tests", () => {
    it("should have one parameter in constructor", () => {
        expect(true).toBe(true);
        var t = new MyModule.Person('test1')
        expect(t.name).toBe('test1');
       
    });
});