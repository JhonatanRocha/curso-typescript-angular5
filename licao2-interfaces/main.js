"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./../licao1-classes/person");
var personDao_1 = require("./personDao");
var personDao = new personDao_1.PersonDao();
var person = new person_1.Person('Michael Jordan', 29);
personDao.insert(person);
//# sourceMappingURL=main.js.map