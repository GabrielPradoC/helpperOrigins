import { IPerson, Person } from "../Types";

/**
 * Classe para manipular um objeto tipo pessoa
 */
export class PersonListImperative implements IPerson{

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
        let desiredPersonName: string = '';
        for(let person of this.personArray){
            if(person.id === id){
                desiredPersonName = person.name;
            }
        }
        return desiredPersonName;
    }

    /**
     * Retorna uma string contendo a bio do objeto com o id informado
     * @param id Id do objeto
     * @returns Bio do objeto
     */
    public getPersonBioById(id: number): string{
        let desiredPersonBio: string = '';
        for(let person of this.personArray){
            if(person.id === id){
                desiredPersonBio = person.bio;
            }
        }
        return desiredPersonBio;
    }

    /**
     * Remove o objeto do tipo pessoa com o id informado do array
     * @param id Id do objeto
     */
    public removePersonById(id: number): void{
        const filteredArray: Array<Person> = [];

        for(let person of this.personArray){
            if(person.id !== id){
                filteredArray.push(person);
            }
        }

        this.personArray = filteredArray;
    }

    /**
     * Muda uma propriedade do objeto do tipo pessoa com o id informado
     * @param id Id do objeto
     * @param propertyName Nome da propriedado do objeto
     * @param propertyNewValue Novo valor para ser atribuído na propriedade informada
     */
    public changePersonAttribute(id: number, propertyName: string, propertyNewValue: string): void{
        const editedArray: Array<Person> = [];

        for(let person of this.personArray){
            if(person.id === id){
                editedArray.push({...person, [propertyName]: propertyNewValue});
            }else{
                editedArray.push(person);
            }
        }

        this.personArray = editedArray;
    }
}