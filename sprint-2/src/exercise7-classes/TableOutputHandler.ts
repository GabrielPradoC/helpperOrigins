import { Utils } from '../Utils';
import { INumberArray } from "../Types";

/**
 * Clase responsável por controlar uma tabela html
 */
export class TableOutputHandler{

    private outputTableElement: HTMLTableRowElement;
    private numberArrayClass:INumberArray;
    /**
     * Inicializa a classe e armazena o array de números
     * @param numberArray Instância da classe NumberArray
     * @param outputTableId Id da tabela de saída
     */
    constructor(numberArrayClass: INumberArray, outputTableId: string){
        this.numberArrayClass = numberArrayClass;
        this.initializeTable(outputTableId);
    }

    /**
     * Armazena o elemento de saída e organiza o array de números em elementos tableData
     * @param outputTableId Id do elemento de saída
     */
    private initializeTable(outputTableId: string): void{
        this.outputTableElement = document.getElementById(outputTableId) as HTMLTableRowElement;
        const sortedValues: Array<number> = this.numberArrayClass.getMinAverageMaxValues();
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