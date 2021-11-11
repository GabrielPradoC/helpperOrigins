import { INumberArray } from "../Types";

/**
 * Classe para processar um array de números
 */
export class NumberArrayImperative implements INumberArray{
    
    public numberArray: Array<number>;

    /**
     * Inicializa a classe, armazena o array de números
     * @param numberArray Array de números
     */
    constructor(numberArray: Array<number>){
        this.numberArray = numberArray;
    }

    /**
     * Retorna o menor valor, o valor médio e o maior valor do array de números
     * @returns Um array contendo em ordem: o menor valor, a média de todos os valores e o maior valor
     */
    public getMinAverageMaxValues(): Array<number>{
        //Checa para ver se todos os elementos do array são números
        const isOnlyNumeric: boolean = this.numberArray.every((item: number): boolean=> /\d/g.test(item.toString()))
        if(isOnlyNumeric){
            let maxValue: number = -Infinity;
            let minValue: number = Infinity;
            let averageValue: number = 0;
            for(let number of this.numberArray){
                if(number > maxValue){
                    maxValue = number;
                }
                if(number < minValue){
                    minValue = number;
                }
                averageValue+= number
            }
            averageValue = Math.round(averageValue/this.numberArray.length);
            return [minValue, averageValue, maxValue];
        }else{
            console.error('A lista informada não contém apenas números!');
            return null;
        }
    }

    /**
     * Gera novos números aleatórios para o array da classe
     * @param numberOfElements Quantidade de números para serem gerados
     */
     public generateRandomNumbersArray(numberOfElements: number): void{
        const numberArray: Array<number> = [];
        for(let i:number = 0; i< numberOfElements; i++){
            numberArray.push(Math.floor(Math.random()*100));
        }
        this.numberArray = numberArray;
    }
}