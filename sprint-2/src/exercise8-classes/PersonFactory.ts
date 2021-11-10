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
        switch(personName){
            case 'Ada Lovelace':
                return new AdaLovelace();
            case 'Alan Turing':
                return new AlanTuring();
            case 'Jean Ichbiah':
                return new JeanIchbiah();
            case 'Nicolau Copérnico':
                return new NicolauCopernico();
            case 'Nikola Tesla':
                return new NikolaTesla();
            default:
                return null;
        }
    }
}