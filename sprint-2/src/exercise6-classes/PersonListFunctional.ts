import { IPerson, Person } from "../Types";
import { EnumPersonPropertyName } from "../Enums";

/**
 * Classe para manipular um objeto tipo pessoa
 */
export class PersonListFunctional implements IPerson{

    public personArray: Array<Person>;

    /**
     * Armazena o array de objetos tipo pessoa
     * @param personArray Array de objetos tipo pessoa
     */
    constructor(personArray: Array<Person>){
        this.personArray = personArray;
    }

    /**
     * Retorna uma string contendo o nome do objeto com o id informado
     * @param id Id do objeto
     * @returns Nome do objeto
     */
    public getPersonNameById(id: number): string{
        return this.getPersonPropertyById(id, EnumPersonPropertyName.name);
    }

    /**
     * Retorna uma string contendo a bio do objeto com o id informado
     * @param id Id do objeto
     * @returns Bio do objeto
     */
    public getPersonBioById(id: number): string{
        return this.getPersonPropertyById(id, EnumPersonPropertyName.bio);
    }

    /**
     * Retorna uma propriedade do objeto com o id informado
     * @param id Id do objeto
     * @param propertyName Nome da propriedade
     * @returns String contendo a propriedade informada
     */
    private getPersonPropertyById(id: number, propertyName: EnumPersonPropertyName): string{
       const desiredPerson: Person =  this.personArray.find((person: Person): boolean=> person.id === id);
        if(!desiredPerson){
           throw new Error("Não foi possível encontrar a pessoa com o id encontrado");
        }
        return desiredPerson[propertyName];
    }

    /**
     * Remove o objeto do tipo pessoa com o id informado do array
     * @param id Id do objeto
     */
    public removePersonById(id: number): void{
        this.personArray = this.personArray.filter((person: Person): boolean=> person.id !== id);
    }

    /**
     * Muda uma propriedade do objeto do tipo pessoa com o id informado
     * @param id Id do objeto
     * @param propertyName Nome da propriedado do objeto
     * @param propertyNewValue Novo valor para ser atribuído na propriedade informada
     */
    public changePersonAttribute(id: number, propertyName: EnumPersonPropertyName, propertyNewValue: string): void{
        this.personArray = this.personArray.map((person: Person): Person=>{
            if(person.id === id){
                return {...person, [propertyName]: propertyNewValue};
            }
            return person;
        });
    }
}