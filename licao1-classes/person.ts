/**
 * Exemplo de uma Classe
 * normal em Typescript.
 */
export class Person {

    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public showAge() : void {
        console.log(this.age);
    }

    public showName() : void {
        console.log(this.name);
    }

    public showPerson(): void {
        console.log('Name: ' + `${this.name}` + '\n' + 'Age: ' + `${this.age}`);
    }

    public toString(): string {
        return `Class Person, name ${this.name}, age ${this.age}`;
    }
}