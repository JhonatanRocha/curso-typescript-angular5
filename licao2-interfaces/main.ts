import { Person } from './../licao1-classes/person';
import { DaoInterface } from './dao.interface';
import { PersonDao } from './personDao';

let personDao : DaoInterface = new PersonDao();
let person : Person = new Person('Michael Jordan', 29);

personDao.insert(person);