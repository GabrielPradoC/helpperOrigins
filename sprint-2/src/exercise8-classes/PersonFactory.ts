import { EnumPersonNames } from "../Types";
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
            case EnumPersonNames.adaLovelace:
                return new AdaLovelace();
            case EnumPersonNames.alanTuring:
                return new AlanTuring();
            case EnumPersonNames.jeanIchbiah:
                return new JeanIchbiah();
            case EnumPersonNames.nicolauCopernico:
                return new NicolauCopernico();
            case EnumPersonNames.nikolaTesla:
                return new NikolaTesla();
            default:
                return null;
        }
    }
}