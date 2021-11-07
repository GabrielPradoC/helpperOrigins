import { Utils } from "../Utils";
import { TableOutputHandler } from "./TableOutputHandler";

/**
 * Classe responsável por controlar o input do usuário e o exibir na tela
 */
export class GenerateRandomUserTableData{

    private userInputElement: HTMLInputElement;
    private spanOutputElement: HTMLSpanElement;
    private tableOutputElement: HTMLTableRowElement;
    private tableOutputElementId: string;

    /**
     * Inicializa a classe e armazena os 3 elementos informados
     * @param userInputElementId Id do elemento de input
     * @param spanOutputElementId Id do elemento de vizualização do array
     * @param tableOutputElementId Id do elemento de saída para o array processado
     */
    constructor(userInputElementId: string, spanOutputElementId: string, tableOutputElementId: string){
        this.userInputElement = document.getElementById(userInputElementId) as HTMLInputElement;
        this.spanOutputElement = document.getElementById(spanOutputElementId) as HTMLSpanElement;
        this.tableOutputElement = document.getElementById(tableOutputElementId) as HTMLTableRowElement;
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
            const randomNumbersArray: Array<number> = this.generateRandomNumbersArray(userNumberInput);
            this.spanOutputElement.textContent = `${randomNumbersArray.join(',')}`;
            Utils.clearElementChildren(this.tableOutputElement);
            new TableOutputHandler(randomNumbersArray, this.tableOutputElementId);
        }
    }

    /**
     * Gera números aleatórios
     * @param numberOfElements Quantidade de números para serem gerados
     * @returns Array contendo todos os números
     */
    private generateRandomNumbersArray(numberOfElements: number): Array<number>{
        const numberArray: Array<number> = [];
        for(let i:number = 0; i< numberOfElements; i++){
            numberArray.push(Math.floor(Math.random()*100));
        }
        return numberArray;
    }
}