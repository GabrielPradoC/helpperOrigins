import { AdaLovelace } from "./AdaLovelace";
import { AlanTuring } from "./AlanTuring";
import { JeanIchbiah } from "./JeanIchbiah";
import { NicolauCopernico } from "./NicolauCopernico";
import { NikolaTesla } from "./NikolaTesla";
import { Person } from "./Person";

/**
 * Classe factory para objetos do tipo pessoa
 */
export class PersonFactory{
    /**
     * Retorna uma instância da classe ligada ao nome informado
     * @param personName Nome da pessoa
     * @returns Instância da classe
     */
    public static getPerson(personName: string): Person{
        if(personName === null){
            return null;
        }else if(personName === 'Ada Lovelace'){
            return new AdaLovelace();
        }else if(personName === 'Alan Turing'){
            return new AlanTuring();
        }else if(personName === 'Jean Ichbiah'){
            return new JeanIchbiah();
        }else if(personName === 'Nicolau Copérnico'){
            return new NicolauCopernico();
        }else if(personName === 'Nikola Tesla'){
            return new NikolaTesla();
        }else{
            return null;
        }
    }
}