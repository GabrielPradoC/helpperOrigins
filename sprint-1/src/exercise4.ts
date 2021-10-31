import { Person, personList } from "./exercise2";

let listCopy: Array<Person> = [...personList];
const outputTableElement = document.getElementById('exercise4-table-body') as HTMLTableElement;
const editFormElement = document.getElementById('exercise4-table-edit-form') as HTMLFormElement;

editFormElement.addEventListener('submit', (event: SubmitEvent): void=>{
    event.preventDefault();
    const clickedButtonElement = event.submitter as HTMLButtonElement;
    const editingPersonId: number = parseInt(clickedButtonElement.value);
    const personExists: boolean = !!listCopy.find((item: Person)=> item.id === editingPersonId);
    if((clickedButtonElement.value === 'cancel') || (!personExists)){
        deleteElementChildren(editFormElement);
    }else{
        const nameInputElement = editFormElement.querySelector('.name-input') as HTMLInputElement;
        const bioInputElement = editFormElement.querySelector('.bio-input') as HTMLInputElement;
        const oldPersonIndex: number = listCopy.findIndex((item: Person): boolean=> item.id === editingPersonId);
        listCopy[oldPersonIndex].name = nameInputElement.value;
        listCopy[oldPersonIndex].bio = bioInputElement.value;
        deleteElementChildren(outputTableElement);
        updateUi();               
    }
});

//Cria os elementos da table assim que a página carrega
createAndAppendPersonData(listCopy);

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
    tableRowElement.id = `exercise4-table-row-person-${item.id}`;
    tableRowElement.append(...personTableData);
    const actionButtons: HTMLDivElement = createTableActionButtons(item.id);
    const tableDataCellActions = document.createElement('td') as HTMLTableCellElement;
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
    const tableEditButton = document.createElement('button') as HTMLButtonElement;
    const tableDeleteButton = document.createElement('button') as HTMLButtonElement;
    const divElement = document.createElement('div') as HTMLDivElement;
    divElement.className = 'btn-group';
    tableEditButton.innerText = 'Editar';
    tableEditButton.className = 'btn btn-outline-secondary';
    tableDeleteButton.className = 'btn btn-outline-danger';
    tableDeleteButton.innerText = 'Deletar';
    tableDeleteButton.addEventListener('click', deleteTableRowElement.bind(this, personId));
    tableEditButton.addEventListener('click', createEditInputElement.bind(this, personId));
    divElement.append(tableEditButton, tableDeleteButton);
    return divElement;
}

/**
 * Pesquisa na lista a pessoa com o id informado
 * @param personId Id da pessoa para pesquisar
 * @returns O objeto do tipo pessoa com o id informado
 */
function getPersonInfo(personId: number): Person{
    const [ requestedPerson ]: Array<Person> = listCopy.filter((person: Person)=> person.id === personId);
    return requestedPerson;
}

/**
 * Remove um elemento table row de dentro do elemento table e remove o objeto do tipo pessoa com o id informado da lista
 * @param personId Id do objeto do tipo pessoa a ser removido
 */
function deleteTableRowElement(personId: number): void{
    const tableBody = document.getElementById('exercise4-table-body') as HTMLTableElement;
    deleteElementChildren(tableBody);
    listCopy = listCopy.filter((item: Person): boolean=> item.id !== personId);
    updateUi();
}

/**
 * Edita os valores do objeto do tipo pessoa informados
 * @param personId Id do objeto do tipo pessoa para editar
 */
function createEditInputElement(personId: number): void{
    const formAlreadyExists: boolean = !!editFormElement.childElementCount;
    const person: Person = getPersonInfo(personId);
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
    const nameEditFieldElement: HTMLDivElement = createInputWithLabel('Nome: ', 'name', name);
    const bioEditFieldElement: HTMLDivElement = createInputWithLabel('Bio: ', 'bio', bio);
    const confirmEditButton = document.createElement('button') as HTMLButtonElement;
    const cancelEditButton = document.createElement('button') as HTMLButtonElement;
    confirmEditButton.innerText = 'Confirmar edição';
    confirmEditButton.className = 'btn btn-outline-success';
    cancelEditButton.innerText = 'Cancelar edição';
    cancelEditButton.className = 'btn btn-outline-danger';
    confirmEditButton.classList.add('confirm-edit');
    cancelEditButton.classList.add('cancel-edit');
    confirmEditButton.value = id.toString();
    cancelEditButton.value = 'cancel';
    confirmEditButton.type = 'submit';
    cancelEditButton.type = 'submit';
    const divElement = document.createElement('div') as HTMLDivElement;
    divElement.className = 'card';
    const divElementCardBody = document.createElement('div') as HTMLDivElement;
    divElementCardBody.className = 'card-body';
    divElementCardBody.append(nameEditFieldElement, bioEditFieldElement, confirmEditButton, cancelEditButton);
    divElement.appendChild(divElementCardBody);
    editFormElement.appendChild(divElement);
}

/**
 * Cria um elemento input e o retorna
 * @param labelText Texto do elemento span
 * @param labelClassName Nome da classe do elemento label
 * @param inputString Valor inicial do elemento input
 * @returns Elemento div contendo o elemento input e o elemento span
 */
function createInputWithLabel(labelText: string, labelClassName: string, inputString: string): HTMLDivElement{
    const divElement = document.createElement('div') as HTMLDivElement;
    const spanElement = document.createElement('span') as HTMLSpanElement;
    const inputElement = document.createElement('input') as HTMLInputElement;
    divElement.className = 'input-group mb-3';
    inputElement.type = 'text';
    inputElement.value = inputString;
    inputElement.className =`${labelClassName}-input form-control`;
    spanElement.textContent = labelText;
    spanElement.className = 'input-group-text';
    divElement.append(spanElement, inputElement);
    return divElement;
}

/**
 * Deleta todos os elementos filhos de um elemento raiz
 * @param element Elemento raiz
 */
function deleteElementChildren(element: HTMLElement): void{
    while(element.children[0]){
        const firstChild = element.children[0] as HTMLElement;
        firstChild.remove();
    };
}

/**
 * Chama a função para recriar todos os elementos de dentro do elemento table a partir da lista de objetos tipo pessoa
 */
function updateUi(): void{
    createAndAppendPersonData(listCopy);
}