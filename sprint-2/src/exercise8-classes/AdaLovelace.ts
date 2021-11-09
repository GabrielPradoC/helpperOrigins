import { Person } from "./Person";

/**
 * Subclasse da classe Pessoa com as informações de : Ada Lovelace
 */
export class AdaLovelace extends Person{
    constructor(){
        super();
        this.name = 'Ada Lovelace';
        this.bio = 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina';   
    }
}