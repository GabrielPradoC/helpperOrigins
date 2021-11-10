import { EnumPersonNames } from "../Types";
import { Person } from "./Person";

/**
 * Subclasse da classe Pessoa com as informações de : Ada Lovelace
 */
export class AdaLovelace extends Person{
    constructor(){
        super();
        this.name = EnumPersonNames.adaLovelace;
        this.bio = 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina';   
    }
}