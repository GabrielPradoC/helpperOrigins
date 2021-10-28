const customUserInputElement = document.getElementById('exercise3-table-custom-array-input') as HTMLInputElement;
const sampleNumberArray: Array<number> = [1,2,3,4,5,6,7,8,9];
const sampleNumberArray2: Array<number> = [8,33,25,15,11,94,41,95,29,91,21,55,21,26,18,70,0,50,10,88,16];
processNumberArrayToTable(sampleNumberArray, 'exercise3-table-results1');
processNumberArrayToTableImperative(sampleNumberArray2, 'exercise3-table-results2');

//Cada vez que o usuário digitar um número X a função vai gerar X números aleatórios
customUserInputElement.addEventListener('change', ():void=>{
    generateUserRandomValues();
});

//Abordagem funcional

function getMinMedianMaxValueFunctional(array: Array<number>): Array<number>{
    const isOnlyNumeric: boolean = array.every((item: number): boolean=> /^[0-9]{1,}$/.test(item.toString()));
    if(isOnlyNumeric){
        const arrayCopy: Array<number> = [...array];
        const maxValue: number = Math.max(...arrayCopy);
        const minValue: number = Math.min(...arrayCopy);
        const sum = (previousValue: number, currentValue: number): number=> previousValue+=currentValue;
        const medianValue: number = Math.round(arrayCopy.reduce(sum)/arrayCopy.length);
        return [minValue, medianValue,  maxValue];
    }else{
        console.error('A lista informada não contém apenas números!');
        return null;
    }
}

//Abordagem imperativa 

function getMinMedianMaxValueImperative(array: Array<number>): Array<number>{
    const isOnlyNumeric: boolean = array.every((item: number): boolean=> /^[0-9]{1,}$/.test(item.toString()));
    if(isOnlyNumeric){
        const arrayCopy: Array<number> = [...array];
        let maxValue: number = -Infinity;
        let minValue: number = Infinity;
        let medianValue: number = 0;
        for(let number of arrayCopy){
            if(number > maxValue){
                maxValue = number;
            }
            if(number < minValue){
                minValue = number;
            }
            medianValue+=number
        }
        medianValue = Math.round(medianValue/arrayCopy.length);
        return [minValue, medianValue, maxValue];
    }else{
        console.error('A lista informada não contém apenas números!');
        return null;
    }
}

function createTableDataArray(array:Array<number>): Array<HTMLTableCellElement>{
    const tableDataElementArray: Array<HTMLTableCellElement> = [];
    for(let number of array){
        const tableDataElement: HTMLTableCellElement = document.createElement('td');
        tableDataElement.innerText = number.toString();
        tableDataElementArray.push(tableDataElement);
    }
    return tableDataElementArray;
}

function appendElements(array: Array<HTMLElement>, targetElement: HTMLElement):void{
    const documentFragment: DocumentFragment = document.createDocumentFragment();
    documentFragment.append(...array);
    targetElement.appendChild(documentFragment);
}

function processNumberArrayToTable(array: Array<number>, targetTableId: string): void{
    const tableOutputElement = document.getElementById(targetTableId) as HTMLTableRowElement;
    const sortedSampleValues: Array<number> = getMinMedianMaxValueFunctional(array);
    const tableDataArray: Array<HTMLTableCellElement> = createTableDataArray(sortedSampleValues);
    appendElements(tableDataArray, tableOutputElement);
}


function processNumberArrayToTableImperative(array: Array<number>, targetTableId: string): void{
    const tableOutputElement = document.getElementById(targetTableId) as HTMLTableRowElement;
    const sortedSampleValues: Array<number> = getMinMedianMaxValueImperative(array);
    const tableDataArray: Array<HTMLTableCellElement> = createTableDataArray(sortedSampleValues);
    appendElements(tableDataArray, tableOutputElement);
}

function generateRandomNumbersArray(howMany: number): Array<number>{
    const numberArray:Array<number> = [];
    for(let i: number = 0; i < howMany;i++){
        numberArray.push(Math.floor(Math.random()*100));
    }
    return numberArray;
}

export function generateUserRandomValues(): void{
    const userNumberInput: number = parseInt(customUserInputElement.value);
    const isInRange: boolean = (userNumberInput <=15) && (userNumberInput >=3);
    if(isInRange){
        const randomNumbersArray: Array<number> = generateRandomNumbersArray(userNumberInput);
        const displayCustomUserArrayElement = document.getElementById('exercise3-table-custom-array-output') as HTMLSpanElement;
        displayCustomUserArrayElement.textContent = `${randomNumbersArray.join(',')}`
        deleteElementChildren('exercise3-table-results3');
        processNumberArrayToTable(randomNumbersArray, 'exercise3-table-results3');
    }
}

function deleteElementChildren(elementId: string): void{
    const parentElement = document.getElementById(elementId) as HTMLElement;
    while(parentElement.firstChild){
        parentElement.firstChild.remove();
    }
}