"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./../licao1-classes/person");
var dao_1 = require("./dao");
var person = new person_1.Person('Michael Jordan', 29);
var dao = new dao_1.Dao();
dao.insert(person);
//# sourceMappingURL=main.js.map