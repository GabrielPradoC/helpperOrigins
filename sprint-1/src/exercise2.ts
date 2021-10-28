import { getPersonBioByIdFunctional } from './exercise2A';
import { getPersonNameByIdImperative } from './exercise2B'; 
import { deletePersonByIdFunctional } from './exercise2C';
import { changePersonPropertyImperative } from './exercise2D';

export type person = {
    readonly id: number;
    name: string;
    bio: string;
    [key: string]: string|number;
};

export type personProperties = keyof person;

type personFilterFunctionByProperty = (propertyName: string, searchValue: string | number) => personFilterFunction;

export type personFilterFunction = (item: person)=> boolean;

export let lista: Array<person> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
]

export const createFunctionFilterPersonByProperty: personFilterFunctionByProperty = (propertyName: string, searchValue: personProperties) => {
    return (item: person): boolean => item[propertyName as keyof person] === searchValue;
};

const idSelectElement = document.getElementById('exercise2-id-input') as HTMLSelectElement;
const nameOutputPElement = document.getElementById('exercise2-name-span') as HTMLParagraphElement;
const bioOutputPElement = document.getElementById('exercise2-bio-span') as HTMLParagraphElement;
const editFormSelectElement = document.getElementById('exercise2-edit-form-select') as HTMLSelectElement;
const editFormElement = document.getElementById('exercise2-edit-form') as HTMLFormElement;
const editFormInputElement = document.getElementById('exercise2-edit-form-input') as HTMLInputElement;
const formDeleteButtonElement = document.getElementById('exercise2-form-delete-button') as HTMLInputElement;
let selectedEditField: string = 'name';
let selectedItemId: number = 1;

idSelectElement.addEventListener('change', (): void=>{
        const inputIdString: string = idSelectElement.value;
        const integerId: number = parseInt(inputIdString);
        selectedItemId = integerId;
        const personName: string = getPersonNameByIdImperative(lista, integerId);
        const personBio: string = getPersonBioByIdFunctional(lista, integerId);
        nameOutputPElement.textContent = personName;
        bioOutputPElement.textContent = personBio;
        if(selectedEditField === 'name'){
            editFormInputElement.value = personName;
        }else{
            editFormInputElement.value = personBio;
        }
});

editFormElement.addEventListener('submit',(event: SubmitEvent): void=>{
    //Para evitar o recarregamento da página
    event.preventDefault();
    //Armazena o novo valor do campo selecionado, edita esse campo e depois atualiza a interface
    //para mostrar a mudança
    const propertyNewValue: string = editFormInputElement.value;
    lista = changePersonPropertyImperative(lista, selectedItemId, selectedEditField, propertyNewValue);  
    updateDisplayedItem();
});

editFormSelectElement.addEventListener('change', (): void=>{
    //Armazena o valor selecionado pelo usuário (nome ou bio) e atualiza qual item está sendo exibido
    const selectedIndex: number = editFormSelectElement.selectedIndex;
    const selectedField = editFormSelectElement[selectedIndex] as HTMLOptionElement;
    const selectedValue: string = selectedField.value;
    selectedEditField = selectedValue;
    updateDisplayedItem();
});

formDeleteButtonElement.addEventListener('click', (): void=>{
    lista = deletePersonByIdFunctional(lista, selectedItemId);
    const nextItem: number = lista.find((item: person): boolean=> item.id !== selectedItemId).id;
    selectedItemId = nextItem;
    const optionsArray: Array<HTMLOptionElement> = mapListItemsToOptions(lista);
    appendChildToSelect(optionsArray);
    updateDisplayedItem();
});

window.addEventListener('load', (): void=>{
    //Pra carregar os itens ao acabar o carregamento da página, isso é necessário
    //pq as opções do select estão sendo geradas dinâmicamente
    loadPageItems(lista);
})

//Caso um outro elemento que não seja o idInput atualize a lista e seja necessário atualizar a interface
//para mostrar a mudança ao usuário
function updateDisplayedItem(): void{
    const updateUi: Event = new Event('change');
    idSelectElement.dispatchEvent(updateUi);
}

function mapListItemsToOptions(array: Array<person>): Array<HTMLOptionElement>{
    while(idSelectElement.children[0]){
        const firstChild = idSelectElement.children[0] as HTMLOptionElement;
        firstChild.remove();
    };

    const personOptions: Array<HTMLOptionElement> = array.map((item: person): HTMLOptionElement=>{
        const optionElement = document.createElement('option');
        optionElement.value = item.id.toString();
        optionElement.innerText = item.id.toString();
        return optionElement;
    });

    return personOptions;
}

function appendChildToSelect(optionArray: Array<HTMLOptionElement>): void{
    const documentFragment: DocumentFragment = document.createDocumentFragment();
    documentFragment.append(...optionArray);
    idSelectElement.appendChild(documentFragment);
}

function loadPageItems(array: Array<person>):void{
    const optionsArray: Array<HTMLOptionElement> = mapListItemsToOptions(array);
    appendChildToSelect(optionsArray);
    updateDisplayedItem();
}