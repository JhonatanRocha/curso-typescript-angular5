"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
/**
 * Exemplo de Herança
 * em TypeScript.
 */
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age) {
        return _super.call(this, name, age) || this;
    }
    Student.prototype.showAge = function () {
        _super.prototype.showAge.call(this);
    };
    Student.prototype.showName = function () {
        _super.prototype.showName.call(this);
    };
    Student.prototype.showPerson = function () {
        console.log('Mostrando dados do Estudante:');
        _super.prototype.showPerson.call(this);
    };
    return Student;
}(person_1.Person));
exports.Student = Student;
//# sourceMappingURL=student.js.map