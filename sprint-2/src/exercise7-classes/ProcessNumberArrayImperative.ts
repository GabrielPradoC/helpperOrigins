/**
 * Classe para processar um array de números
 */
export class ProcessNumberArrayImperative{
    
    private numberArray: Array<number>;

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
    public getMinMedianMaxValues(): Array<number>{
        //Checa para ver se todos os elementos do array são números
        const isOnlyNumeric: boolean = this.numberArray.every((item: number): boolean=> /\d/g.test(item.toString()))
        if(isOnlyNumeric){
            let maxValue: number = -Infinity;
            let minValue: number = Infinity;
            let medianValue: number = 0;
            for(let number of this.numberArray){
                if(number > maxValue){
                    maxValue = number;
                }
                if(number < minValue){
                    minValue = number;
                }
                medianValue+= number
            }
            medianValue = Math.round(medianValue/this.numberArray.length);
            return [minValue, medianValue, maxValue];
        }else{
            console.error('A lista informada não contém apenas números!');
            return null;
        }
    }
}