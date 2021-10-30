import { Person, PersonFilterFunction } from './exercise2';

//Abordagem funcional 

/**
 * Remove o objeto com o id informado do array informado e retorna o array
 * @param personList Array com os objetos tipo pessoa
 * @param id Id do objeto tipo pessoa para buscar
 * @returns 
 */
export function deletePersonByIdFunctional(personList: Array<Person>, id: number): Array<Person>{
    const hasDifferentId: PersonFilterFunction = (item: Person): boolean => item.id !== id;
    return personList.filter(hasDifferentId);
}

//Abordagem imperativa

/**
 * Remove o objeto com o id informado do array informado e retorna o array
 * @param personList Array com os objetos tipo pessoa
 * @param id Id do objeto tipo pessoa para buscar
 * @returns 
 */
function deletePersonByIdImperative(personList: Array<Person>, id: number): Array<Person>{
    const filteredArray: Array<Person> = [];
    
    for(let i: number = 0; i< personList.length; i++){
        if(personList[i].id !== id){
            filteredArray.push(personList[i]);
        }
    }

    return filteredArray;
}