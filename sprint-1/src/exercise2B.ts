import { person, createFunctionFilterPersonByProperty, personFilterFunction } from './exercise2';

//Abordagem funcional

function getPersonNameByIdFunctional(array: Array<person>, id: number): string{
    const findPersonById: personFilterFunction  = createFunctionFilterPersonByProperty('id',id);
    const [ desiredItem ] = array.filter(findPersonById) as Array<person>;
    return desiredItem.name;
}

//Abordagem imperativa

export function getPersonNameByIdImperative(array: Array<person>, id: number): string{
    let desiredItem: person = null;

    for(let i: number = 0; i < array.length; i++){
        if(array[i].id === id){
            desiredItem = array[i];
            break;
        }
    }

    return desiredItem.name;
}