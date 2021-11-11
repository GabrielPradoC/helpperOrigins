import { INumberArray } from "../Types";
import { Utils } from "../Utils";
import { TableOutputHandler } from "./TableOutputHandler";

/**
 * Classe responsável por controlar o input do usuário e o exibir na tela
 */
export class Table{

    private userInputElement: HTMLInputElement;
    private spanOutputElement: HTMLSpanElement;
    private tableOutputElement: HTMLTableRowElement;
    private tableOutputElementId: string;
    private numberArrayClass: INumberArray;

    /**
     * Inicializa a classe e armazena os 3 elementos informados
     * @param userInputElementId Id do elemento de input
     * @param spanOutputElementId Id do elemento de vizualização do array
     * @param tableOutputElementId Id do elemento de saída para o array processado
     */
    constructor(numberArrayClass: INumberArray,userInputElementId: string, spanOutputElementId: string, tableOutputElementId: string){
        this.userInputElement = document.getElementById(userInputElementId) as HTMLInputElement;
        this.spanOutputElement = document.getElementById(spanOutputElementId) as HTMLSpanElement;
        this.tableOutputElement = document.getElementById(tableOutputElementId) as HTMLTableRowElement;
        this.numberArrayClass = numberArrayClass;
        this.tableOutputElementId = tableOutputElementId;
        this.setEventListeners();
        this.generateRandomUserTable();
    }

    /**
     * Inicializa os eventListeners
     */
    private setEventListeners(): void{
        this.userInputElement.addEventListener('change', ():void=>{
            this.generateRandomUserTable();
        });
    }

    /**
     * Gera números aleatórios, os transforma em elementos tableData e os anexa ao DOM
     */
    private generateRandomUserTable(): void{
        const userNumberInput: number = parseInt(this.userInputElement.value);
        const isInRange: boolean = (userNumberInput <=15) && (userNumberInput >=3);
        if(isInRange){
            this.numberArrayClass.generateRandom(userNumberInput);
            this.spanOutputElement.textContent = `${this.numberArrayClass.numberArray.join(',')}`;
            Utils.clearElementChildren(this.tableOutputElement);
            new TableOutputHandler(this.numberArrayClass, this.tableOutputElementId);
        }
    }
}