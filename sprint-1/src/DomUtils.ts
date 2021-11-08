interface Input {
    type: string,
    value?: string,
    className?: string
}

interface Button {
    className: string,
    innerText: string,
    value: string,
    type?: string
}

interface InputGroup {
    spanText: string,
    inputClassName: string,
    initialValue: string
}

/**
 * Cria um elemento input com os parâmetros passados na função e o retorna
 * @param type Uma string informando qual será o tipo do elemento input
 * @param value Uma string informando qual será o valor do elemento input
 * @param className Uma string contendo o nome de todas as classes separadas por um espaço para serem atribuídas ao elemento input
 * @returns O elemento input
 */
function createInputElement({type , value = '', className = ''}: Input): HTMLInputElement{
    const inputElement = document.createElement('input') as HTMLInputElement;

    inputElement.type = type;
    inputElement.value = value;
    inputElement.className = className;
    return inputElement;
}

/**
 * Cria um elemento div com os parâmetros passados na função e o retorna
 * @param className Uma string contendo o nome de todas as classes separadas por um espaço para serem atribuídas ao elemento div
 * @returns O elemento div
 */
export function createDivElement(className: string = ''): HTMLDivElement{
    const divElement = document.createElement('div') as HTMLDivElement;

    divElement.className = className;
    return divElement;
}

/**
 * Cria um elemento button com os parâmetros passados na função e o retorna
 * @param className Uma string contendo o nome de todas as classes separadas por um espaço para serem atribuídas ao elemento button
 * @param innerText Uma string contendo o texto para ser inserido dentro do elemento button
 * @param value Uma string contendo o texto que será o valor do elemento button
 * @param type Uma string informando qual será o tipo do elemento button
 * @returns O elemento button
 */
export function createButtonElement({className, innerText, value = 'cancel', type = 'button'}: Button): HTMLButtonElement{
    const buttonElement = document.createElement('button') as HTMLButtonElement;

    buttonElement.className = className;
    buttonElement.innerText = innerText;
    buttonElement.value = value;
    buttonElement.type = type;
    return buttonElement;
}

/**
 * Cria um elemento span com os parâmetros passados na função e o retorna
 * @param className Uma string contendo o nome de todas as classes separadas por um espaço para serem atribuídas ao elemento span
 * @param textContent Uma string contendo o texto para ser inserido dentro do elemento span
 * @returns O elemento span
 */
function createSpanElement(className: string, textContent: string = ''): HTMLSpanElement{
   const spanElement = document.createElement('span') as HTMLSpanElement;

   spanElement.textContent = textContent;
   spanElement.className = className;
   return spanElement;
}


/**
 * Deleta todos os elementos filhos de um elemento raiz
 * @param element Elemento raiz
 */
 export function deleteElementChildren(element: HTMLElement): void{
    while(element.children[0]){
        const firstChild = element.children[0] as HTMLElement;
        firstChild.remove();
    };
}

/**
 * Cria um elemento input e o retorna
 * @param spanText Texto do elemento span
 * @param inputClassName Nome da classe do elemento input, referencia para qual campo ele será usado para editar
 * @param initialValue Valor inicial do elemento input
 * @returns Elemento div contendo o elemento input e o elemento span
 */
 export function createInputGroup({spanText, inputClassName, initialValue}: InputGroup): HTMLDivElement{
    const divElement: HTMLDivElement = createDivElement('input-group mb-3');
    const spanElement: HTMLSpanElement = createSpanElement('input-group-text', spanText);
    const inputElement: HTMLInputElement = createInputElement({type: 'text', value: initialValue, className: `${inputClassName}-input form-control`});

    divElement.append(spanElement, inputElement);
    return divElement;
}
