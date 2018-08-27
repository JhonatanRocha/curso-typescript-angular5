import { Person } from './person';

/**
 * Exemplo de Herança
 * em TypeScript.
 */
export class Student extends Person {
    
    constructor(name: string, age: number) {
        super(name, age);
    }

    public showAge() : void {
        super.showAge();
    }

    public showName() : void {
        super.showName();
    }

    public showPerson(): void {
        console.log('Mostrando dados do Estudante:');
       super.showPerson();
    }
}
