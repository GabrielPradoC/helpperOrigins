import { Person } from "./Person";

/**
 * Subclasse da classe Pessoa com as informações de : Nicolau Copérnico
 */
export class NicolauCopernico extends Person{
    constructor(){
        super();
        this.name = 'Nicolau Copérnico';
        this.bio = 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.';
    }
}