import { createButtonElement, createDivElement, createInputGroup, deleteElementChildren } from "./DomUtils";
import { Person, personList } from "./exercise2";

let listCopy: Array<Person> = [...personList];
const outputTableElement = document.getElementById('exercise4-table-body') as HTMLTableElement;
const editFormElement = document.getElementById('exercise4-table-edit-form') as HTMLFormElement;

editFormElement.addEventListener('submit', (event: SubmitEvent): void=>{
    event.preventDefault();

    const clickedButtonElement = event.submitter as HTMLButtonElement;
    const editingPersonId: number = parseInt(clickedButtonElement.value);
    const personExists: boolean = !!findPersonFromList(listCopy, editingPersonId);

    if(personExists){
        const nameInputElement = editFormElement.querySelector('.name-input') as HTMLInputElement;
        const bioInputElement = editFormElement.querySelector('.bio-input') as HTMLInputElement;
        const oldPersonIndex: number = listCopy.findIndex((item: Person): boolean=> item.id === editingPersonId);

        listCopy[oldPersonIndex].name = nameInputElement.value;
        listCopy[oldPersonIndex].bio = bioInputElement.value;
        deleteElementChildren(outputTableElement);
        updateUi();               
    }
    deleteElementChildren(editFormElement);
});

/**
 * Cria um table row para cada pessoa no itemArray e anexa ao DOM
 * @param itemArray Array contendo objetos do tipo pessoa
 */
function createAndAppendPersonData(itemArray: Array<Person>): void{
    const tableRowArray: Array<HTMLTableRowElement> = itemArray.map(createPersonTableRow);

    outputTableElement.append(...tableRowArray);
}

/**
 * Mapeia um objeto do tipo pessoa para um elemento table row 
 * @param item Objeto do tipo pessoa
 * @returns Retorna um elemento table row
 */
function createPersonTableRow(item: Person): HTMLTableRowElement{
    const tableRowElement = document.createElement('tr') as HTMLTableRowElement;
    const personTableData: Array<HTMLTableCellElement> = createPersonTableData(item);
    const tableDataCellActions = document.createElement('td') as HTMLTableCellElement;
    const actionButtons: HTMLDivElement = createTableActionButtons(item.id);

    tableRowElement.id = `exercise4-table-row-person-${item.id}`;
    tableRowElement.append(...personTableData);    
    tableDataCellActions.appendChild(actionButtons);
    tableRowElement.appendChild(tableDataCellActions);
    return tableRowElement;
}

/**
 * Cria um table cell para cada propriedade do objeto pessoa
 * @param item Objeto do tipo pessoa
 * @returns Retorna um array contendo elementos table cell
 */
function createPersonTableData(item: Person): Array<HTMLTableCellElement>{
    const tableRowArray: Array<HTMLTableCellElement> = [];

    for(let property in item){
        const tableCellElement = document.createElement('td') as HTMLTableCellElement;

        tableCellElement.textContent = `${item[property]}`;
        tableCellElement.className = `exercise4-table-data-person-${property}`;
        tableRowArray.push(tableCellElement);
    }
    return tableRowArray;
}

/**
 * Cria dois botões, um para editar e outro para deletar uma pessoa da lista
 * @param personId Id do objeto do tipo pessoa ao qual os botões serão linkados
 * @returns Um elemento div com os 2 botões
 */
function createTableActionButtons(personId: number): HTMLDivElement{
    const tableEditButton: HTMLButtonElement = createButtonElement({className: 'btn btn-outline-secondary', innerText: 'Editar', value: personId.toString()});
    const tableDeleteButton: HTMLButtonElement = createButtonElement({className: 'btn btn-outline-danger', innerText: 'Deletar', value: personId.toString()});
    const divElement: HTMLDivElement = createDivElement('btn-group');
    
    tableDeleteButton.addEventListener('click', deleteTableRowElement.bind(this, personId));
    tableEditButton.addEventListener('click', createEditInputElement.bind(this, personId));
    divElement.append(tableEditButton, tableDeleteButton);
    return divElement;
}

/**
 * Remove um elemento table row de dentro do elemento table e remove o objeto do tipo pessoa com o id informado da lista
 * @param personId Id do objeto do tipo pessoa a ser removido
 */
function deleteTableRowElement(personId: number): void{
    const tableRow = document.getElementById(`exercise4-table-row-person-${personId}`) as HTMLTableElement;

    tableRow.remove();
    listCopy = removePersonFromList(listCopy, personId);
}

/**
 * Edita os valores do objeto do tipo pessoa informados
 * @param personId Id do objeto do tipo pessoa para editar
 */
function createEditInputElement(personId: number): void{
    const formAlreadyExists: boolean = !!editFormElement.childElementCount;
    const person: Person = findPersonFromList(listCopy, personId);
    //Se existir um formulário ele atualiza a informação de qual pessoa está sendo exibida
    //Se não existir ele chama outra função para criar o formulário
    if(formAlreadyExists){
        const nameInputElement = editFormElement.querySelector('.name-input') as HTMLInputElement;
        const bioInputElement = editFormElement.querySelector('.bio-input') as HTMLInputElement;
        const formConfirmButtonElement = editFormElement.querySelector('.confirm-edit') as HTMLInputElement;

        nameInputElement.value = person.name;
        bioInputElement.value = person.bio;
        formConfirmButtonElement.value = personId.toString();
    }else{
        createEditPersonForm(person.name, person.bio, person.id);
    }
}

/**
 * Cria um formulário para edição com 2 inputs e 2 botões e os anexa ao DOM
 * @param name Nome do objeto do tipo pessoa
 * @param bio Bio do objeto do tipo pessoa
 * @param id Id do objeto do tipo pessoa
 */
function createEditPersonForm(name: string, bio:string, id: number): void{
    const nameEditFieldElement: HTMLDivElement = createInputGroup({spanText: 'Nome: ', inputClassName: 'name', initialValue: name});
    const bioEditFieldElement: HTMLDivElement = createInputGroup({spanText: 'Bio: ', inputClassName: 'bio', initialValue: bio});
    const confirmEditButton: HTMLButtonElement = createButtonElement({className: 'btn btn-outline-success confirm-edit', innerText: 'Confirmar edição', value: id.toString(), type: 'submit'});
    const cancelEditButton: HTMLButtonElement = createButtonElement({className: 'btn btn-outline-danger cancel-edit', innerText: 'Cancelar edição', value: 'cancel', type: 'submit'});
    const divElement: HTMLDivElement = createDivElement('card');
    const divElementCardBody: HTMLDivElement = createDivElement('card-body');

    divElementCardBody.append(nameEditFieldElement, bioEditFieldElement, confirmEditButton, cancelEditButton);
    divElement.appendChild(divElementCardBody);
    editFormElement.appendChild(divElement);
}

/**
 * Chama a função para recriar todos os elementos de dentro do elemento table a partir da lista de objetos tipo pessoa
 */
export function updateUi(): void{
    createAndAppendPersonData(listCopy);
}

/**
 * Remove um item do array de objetos tipo pessoa e o retorna
 * @param personArray Array de objetos tipo pessoa
 * @param idToRemove Id para ser removido
 * @returns Array sem o objeto com o id informado
 */
function removePersonFromList(personArray: Array<Person>, idToRemove: number): Array<Person>{
    return personArray.filter((person: Person): boolean=> person.id !== idToRemove);
}

/**
 * Procura no array de objetos tipo pessoa um objeto que tenha o mesmo id do id informado
 * @param personArray Array de objetos tipo pessoa para realizar a busca
 * @param searchId Id do objeto desejado
 * @returns O objeto com o id informado
 */
function findPersonFromList(personArray: Array<Person>, searchId: number): Person{
    return personArray.find((item: Person): boolean=> item.id === searchId);
}