/**
 * Interface do tipo Generics em Typescript.
 */
export interface DaoInterface<T> {
    
    tableName: string;

    insert(object: T): boolean;
    update(object: T): boolean;
    delete(id: number): boolean;
    findById(id: number): T;
    findAll(): [T];
}