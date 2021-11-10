import { EnumPersonNames } from "../Types";
import { Person } from "./Person";

/**
 * Subclasse da classe Pessoa com as informações de : Jean Ichbiah
 */
export class JeanIchbiah extends Person{
    constructor(){
        super();
        this.name = EnumPersonNames.jeanIchbiah;
        this.bio = 'Jean David Ichbiah was a French computer scientist and the initial chief designer of Ada, a general-purpose, strongly typed programming language with certified validated compilers.';
    }
}