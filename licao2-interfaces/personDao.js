"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./../licao1-classes/person");
/**
 * Classe que implementa a Interface
 * em Typescript.
 */
var PersonDao = /** @class */ (function () {
    function PersonDao() {
    }
    PersonDao.prototype.insert = function (person) {
        console.log('Inserindo no Banco de Dados:', person.toString());
        return true;
    };
    PersonDao.prototype.update = function (person) {
        console.log('Atualizando Person no Banco de Dados', person.toString());
        return true;
    };
    PersonDao.prototype.delete = function (id) {
        console.log('Deletando Person no Banco de Dados');
        return true;
    };
    PersonDao.prototype.findById = function (id) {
        console.log('Person de ID: ' + ("" + id) + ' no Banco de Dados');
        return null;
    };
    PersonDao.prototype.findAll = function () {
        console.log('Buscando todos os Person no Banco de Dados');
        return [new person_1.Person('Paul Pierce', 29)];
    };
    return PersonDao;
}());
exports.PersonDao = PersonDao;
//# sourceMappingURL=personDao.js.map