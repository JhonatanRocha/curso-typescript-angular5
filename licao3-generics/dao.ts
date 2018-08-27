import { DaoInterface } from './dao.interface';

/**
 * Classe que implementa a Interface
 * em Typescript.
 */
export class Dao<T> implements DaoInterface<T> {

    tableName: string;

    insert(object: T): boolean {
        console.log('Inserindo no Banco de Dados:');
        return true;
    }

    update(object: T): boolean {
        console.log('Atualizando no Banco de Dados');
        return true;
    }

    delete(id: number): boolean {
        console.log('Deletando no Banco de Dados');
        return true;
    }

    findById(id: number): T {
        console.log('Buscando pelo ID: ' + `${id}` + ' no Banco de Dados');
        return null;
    }

    findAll(): [T] {
        console.log('Buscando todos no Banco de Dados');
        return null;
    }
}