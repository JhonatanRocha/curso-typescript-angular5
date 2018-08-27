"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Exemplo de uma Classe
 * normal em Typescript.
 */
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.showAge = function () {
        console.log(this.age);
    };
    Person.prototype.showName = function () {
        console.log(this.name);
    };
    Person.prototype.showPerson = function () {
        console.log('Name: ' + ("" + this.name) + '\n' + 'Age: ' + ("" + this.age));
    };
    Person.prototype.toString = function () {
        return "Class Person, name " + this.name + ", age " + this.age;
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map