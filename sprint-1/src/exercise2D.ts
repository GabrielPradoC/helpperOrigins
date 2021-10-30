import { Person, PersonProperties, } from './exercise2';

//Abordagem funcional

/**
 * Muda a propriedade desejada do objeto com a id informada e retorna o array com o objeto editado
 * @param personList Array com todos os objetos tipo pessoa
 * @param id Id do objeto tipo pessoa para buscar
 * @param propertyName Nome da propriedade a ser editada
 * @param propertyNewValue O novo valor para essa propriedade
 * @returns Novo array com o objeto editado
 */
function changePersonPropertyFunctional(personList: Array<Person>, id: number, propertyName: PersonProperties, propertyNewValue: string): Array<Person>{
    const findAndChangeItemProperty = (item: Person): Person =>{
        if(item.id === id){
            //Copia o item original e depois substitui o conteúdo da propriedade escolhida
            return {...item, [propertyName]: propertyNewValue };
        }else{
            return item;
        }
    };
    const editedArray: Array<Person> = personList.map(findAndChangeItemProperty);
    
    return editedArray;
}

//Abordagem imperativa

/**
 * Muda a propriedade desejada do objeto com a id informada e retorna o array com o objeto editado
 * @param personList Array com todos os objetos tipo pessoa
 * @param id Id do objeto tipo pessoa para buscar
 * @param propertyName Nome da propriedade a ser editada
 * @param propertyNewValue O novo valor para essa propriedade
 * @returns Novo array com o objeto editado
 */
export function changePersonPropertyImperative(personList: Array<Person>, id: number, propertyName: PersonProperties, propertyNewValue: string): Array<Person>{
    const editedArray: Array<Person> = [];
    for(let i: number = 0; i < personList.length; i++){
        if(personList[i].id === id){
            editedArray.push({...personList[i], [propertyName]: propertyNewValue});
        }else{
            editedArray.push(personList[i]);
        }
    }

    return editedArray;
}
