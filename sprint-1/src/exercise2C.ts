import { person, personFilterFunction } from './exercise2';

//Abordagem funcional 

export function deletePersonByIdFunctional(array: Array<person>, id: number): Array<person>{
    const hasDifferentId: personFilterFunction = (item: person): boolean => item.id !== id;
    return array.filter(hasDifferentId);
}

//Abordagem imperativa

function deletePersonByIdImperative(array: Array<person>, id: number): Array<person>{
    const filteredArray: Array<person> = [];
    
    for(let i: number = 0; i< array.length; i++){
        if(array[i].id !== id){
            filteredArray.push(array[i]);
        }
    }

    return filteredArray;
}