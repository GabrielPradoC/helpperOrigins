import { Person } from './exercise2';

//Abordagem funcional

/**
 * Retorna o nome do elemento do id informado
 * @param personList Array com os objetos tipo pessoa
 * @param id Id do objeto tipo pessoa para buscar
 * @returns 
 */
function getPersonNameByIdFunctional(personList: Array<Person>, id: number): string{
    const [ desiredItem ] = personList.filter((item: Person): boolean=> item.id === id);
    return desiredItem.name;
}

//Abordagem imperativa

/**
 * Retorna o nome do elemento do id informado
 * @param personList Array com os objetos tipo pessoa
 * @param id Id do objeto tipo pessoa para buscar
 * @returns 
 */
export function getPersonNameByIdImperative(personList: Array<Person>, id: number): string{
    let desiredItem: Person = null;

    for(let i: number = 0; i < personList.length; i++){
        if(personList[i].id === id){
            desiredItem = personList[i];
            break;
        }
    }

    return desiredItem.name;
}