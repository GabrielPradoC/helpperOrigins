import { Person } from "./Person";

/**
 * Subclasse da classe Pessoa com as informações de : Alan Turing
 */
export class AlanTuring extends Person{
    constructor(){
        super();
        this.name = 'Alan Turing';
        this.bio = 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia';  
    }
}      