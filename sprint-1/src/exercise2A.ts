import { Person } from './exercise2';

//Abordagem funcional
/**
 * Retorna a bio do elemento do id informado
 * @param personList Array com os objetos tipo pessoa
 * @param id Id do objeto tipo pessoa para buscar
 * @returns 
 */
export function getPersonBioByIdFunctional(personList: Array<Person>, id: number): string{
    const [ desiredItem ] = personList.filter((item: Person): boolean=> item.id === id);
    return desiredItem.bio;
}

//Abordagem imperativa

/**
 * Retorna a bio do elemento do id informado
 * @param personList Array com os objetos tipo pessoa
 * @param id Id do objeto tipo pessoa para buscar
 * @returns 
 */
function getPersonBioByIdImperative(personList: Array<Person>, id: number): string{
    let desiredItem: Person = null;

    for(let i: number = 0; i < personList.length; i++){
        if(personList[i].id === id){
            desiredItem = personList[i];
            break;
        }
    }

    return desiredItem.bio;
}