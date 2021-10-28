import { person, personProperties, } from './exercise2';

//Abordagem funcional

function changePersonPropertyFunctional(array: Array<person>, id: number, propertyName: personProperties, propertyNewValue: string): Array<person>{
    const findAndChangeItemProperty = (item: person): person =>{
        if(item.id === id){
            //Copia o item original e depois substitui o conteúdo da propriedade escolhida
            return {...item, [propertyName]: propertyNewValue };
        }else{
            return item;
        }
    };
    const editedArray: Array<person> = array.map(findAndChangeItemProperty);
    
    return editedArray;
}

//Abordagem imperativa

export function changePersonPropertyImperative(array: Array<person>, id: number, propertyName: personProperties, propertyNewValue: string): Array<person>{
    const editedArray: Array<person> = [];
    for(let i: number = 0; i < array.length; i++){
        if(array[i].id === id){
            editedArray.push({...array[i], [propertyName]: propertyNewValue});
        }else{
            editedArray.push(array[i]);
        }
    }

    return editedArray;
}
