import { Person } from './../licao1-classes/person';
import { DaoInterface } from './dao.interface';

/**
 * Classe que implementa a Interface
 * em Typescript.
 */
export class PersonDao implements DaoInterface {

    tableName: string;

    insert(person: Person): boolean {
        console.log('Inserindo no Banco de Dados:', person.toString());
        return true;
    }

    update(person: Person): boolean {
        console.log('Atualizando Person no Banco de Dados', person.toString());
        return true;
    }

    delete(id: number): boolean {
        console.log('Deletando Person no Banco de Dados');
        return true;
    }

    findById(id: number): Person {
        console.log('Person de ID: ' + `${id}` + ' no Banco de Dados');
        return null;
    }

    findAll(): [Person] {
        console.log('Buscando todos os Person no Banco de Dados');
        return [new Person('Paul Pierce', 29)]
    }
}