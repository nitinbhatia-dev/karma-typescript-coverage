/// <reference path="./includes/jasmine.d.ts"/>
/// <reference path="../src/PersonClass.ts"/>

describe("suite", () => {
    it("should be true", () => {
        expect(true).toBe(true);
        var t = new MyModule.Person('test1')
        expect(t.name).toBe('test1');
       
    });
});