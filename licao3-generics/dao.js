"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Classe que implementa a Interface
 * em Typescript.
 */
var Dao = /** @class */ (function () {
    function Dao() {
    }
    Dao.prototype.insert = function (object) {
        console.log('Inserindo no Banco de Dados:');
        return true;
    };
    Dao.prototype.update = function (object) {
        console.log('Atualizando no Banco de Dados');
        return true;
    };
    Dao.prototype.delete = function (id) {
        console.log('Deletando no Banco de Dados');
        return true;
    };
    Dao.prototype.findById = function (id) {
        console.log('Buscando pelo ID: ' + ("" + id) + ' no Banco de Dados');
        return null;
    };
    Dao.prototype.findAll = function () {
        console.log('Buscando todos no Banco de Dados');
        return null;
    };
    return Dao;
}());
exports.Dao = Dao;
//# sourceMappingURL=dao.js.map