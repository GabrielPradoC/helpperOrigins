import { EnumPersonNames } from "../Types";
import { Person } from "./Person";

/**
 * Subclasse da classe Pessoa com as informações de : Nikola Tesla
 */
export class NikolaTesla extends Person{
    constructor(){
        super();
        this.name = EnumPersonNames.nikolaTesla;
        this.bio = 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.';   
    }
}