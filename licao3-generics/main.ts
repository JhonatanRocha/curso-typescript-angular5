import { Person } from './../licao1-classes/person';
import { Dao } from "./dao";
import { DaoInterface } from './dao.interface';

let person: Person = new Person('Michael Jordan', 29);

let dao: Dao<Person> = new Dao<Person>();
dao.insert(person);