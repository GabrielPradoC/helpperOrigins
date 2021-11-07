import { ProcessNumberArrayImperative } from "./ProcessNumberArrayImperative";
import { Utils } from '../Utils';

/**
 * Clase responsável por controlar uma tabela html
 */
export class TableOutputHandler extends ProcessNumberArrayImperative{

    private outputTableElement: HTMLTableRowElement;

    /**
     * Inicializa a classe e armazena o array de números
     * @param numberArray Array de números
     * @param outputTableId Id da tabela de saída
     */
    constructor(numberArray: Array<number>, outputTableId: string){
        super(numberArray);
        this.initializeTable(outputTableId);
    }

    /**
     * Armazena o elemento de saída e organiza o array de números em elementos tableData
     * @param outputTableId Id do elemento de saída
     */
    private initializeTable(outputTableId: string): void{
        this.outputTableElement = document.getElementById(outputTableId) as HTMLTableRowElement;
        const sortedValues: Array<number> = this.getMinMedianMaxValues();
        this.createTableDataArray(sortedValues);
    }

    /**
     * Mapeia cada número no array para um elemento tableData e os anexa ao DOM
     * @param numbersArray Array de números
     */
    private createTableDataArray(numbersArray: Array<number>): void{
        const tableDataElementArray: Array<HTMLTableCellElement> = [];
        for(let number of numbersArray){
            const tableDataElement: HTMLTableCellElement = document.createElement('td');
            tableDataElement.innerText= number.toString();
            tableDataElementArray.push(tableDataElement);
        }
        Utils.appendElements(tableDataElementArray, this.outputTableElement);
    }
}