import { getPersonBioByIdFunctional } from './exercise2A';
import { getPersonNameByIdImperative } from './exercise2B'; 
import { deletePersonByIdFunctional } from './exercise2C';
import { changePersonPropertyImperative } from './exercise2D';

export type Person = {
    readonly id: number;
    name: string;
    bio: string;
    [key: string]: string|number;
};

export type PersonProperties = keyof Person;

export type PersonFilterFunction = (item: Person)=> boolean;

export let personList: Array<Person> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
]

const idSelectElement = document.getElementById('exercise2-id-select') as HTMLSelectElement;
const nameOutputElement = document.getElementById('exercise2-name-span') as HTMLParagraphElement;
const bioOutputElement = document.getElementById('exercise2-bio-span') as HTMLParagraphElement;
const editFormSelectElement = document.getElementById('exercise2-edit-form-select') as HTMLSelectElement;
const editFormElement = document.getElementById('exercise2-edit-form') as HTMLFormElement;
const editFormInputElement = document.getElementById('exercise2-edit-form-input') as HTMLInputElement;
const formDeleteButtonElement = document.getElementById('exercise2-form-delete-button') as HTMLInputElement;
const formEditButtonElement = document.getElementById('exercise2-edit-form-submit-button') as HTMLInputElement;
//Valores para carregar o item inicial
let selectedEditField: string = 'name';
let selectedItemId: number = 1;

idSelectElement.addEventListener('change', (): void=>{
        const inputIdString: string = idSelectElement.value;
        const integerId: number = parseInt(inputIdString);
        selectedItemId = integerId;
        const personName: string = getPersonNameByIdImperative(personList, integerId);
        const personBio: string = getPersonBioByIdFunctional(personList, integerId);
        nameOutputElement.textContent = personName;
        bioOutputElement.textContent = personBio;
        if(selectedEditField === 'name'){
            editFormInputElement.value = personName;
        }else{
            editFormInputElement.value = personBio;
        }
});

editFormElement.addEventListener('submit',(event: SubmitEvent): void=>{
    //Para evitar o recarregamento da página
    event.preventDefault();
    const propertyNewValue: string = editFormInputElement.value;
    personList = changePersonPropertyImperative(personList, selectedItemId, selectedEditField, propertyNewValue);  
    updateDisplayedItem();
});

editFormSelectElement.addEventListener('change', (): void=>{
    selectedEditField = editFormSelectElement.value;
    updateDisplayedItem();
});

formDeleteButtonElement.addEventListener('click', (): void=>{
    personList = deletePersonByIdFunctional(personList, selectedItemId);
    if(personList.length === 0){
        formEditButtonElement.disabled = true;
        formDeleteButtonElement.disabled = true;
        editFormSelectElement.disabled = true;
        idSelectElement.disabled = true;
        clearElementChildren(idSelectElement);
        return;
    }
    loadPageItems(personList);
    updateDisplayedItem();
});

//Caso um outro elemento que não seja o idSelectElement atualize a lista e seja necessário atualizar a interface
//para mostrar a mudança ao usuário
/**
 * Dispara um evento para recriar qual item está sendo exibido na página
 */
function updateDisplayedItem(): void{
    const updateUi: Event = new Event('change');
    idSelectElement.dispatchEvent(updateUi);
}

/**
 * Cria e retorna um array de elementos li para cada pessoa passada na personList
 * @param personList Array de objetos tipo pessoa
 * @returns Array com elementos li
 */
function mapListItemsToOptions(personList: Array<Person>): Array<HTMLOptionElement>{
    clearElementChildren(idSelectElement);

    const personOptions: Array<HTMLOptionElement> = personList.map((item: Person): HTMLOptionElement=>{
        const optionElement = document.createElement('option') as HTMLOptionElement;
        optionElement.value = item.id.toString();
        optionElement.innerText = item.id.toString();
        return optionElement;
    });

    return personOptions;
}

/**
 * Anexa os elementos option passados como argumento ao elemento select
 * @param optionArray Array com os elementos option
 */
function appendChildToSelect(optionArray: Array<HTMLOptionElement>): void{
    const documentFragment: DocumentFragment = document.createDocumentFragment();
    documentFragment.append(...optionArray);
    idSelectElement.appendChild(documentFragment);
}

/**
 * Mapeia o array passado como argumento para elementos option, anexa eles ao elemento select e depois atualiza qual elemento está sendo exibido 
 * @param personList Array com os objetos tipo pessoa
 */
export function loadPageItems(personList: Array<Person>):void{
    const optionsArray: Array<HTMLOptionElement> = mapListItemsToOptions(personList);
    appendChildToSelect(optionsArray);
    updateDisplayedItem();
}

/**
 * Remove todos os elementos filhos de um elemento raiz
 * @param element Elemento raiz
 */
function clearElementChildren(element:HTMLElement): void{
    while(element.children[0]){
        const firstChild = element.children[0] as HTMLElement;
        firstChild.remove();
    };
}