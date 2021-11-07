/**
 * Classe para processar um array de números
 */
export class ProcessNumberArrayFunctional{
    
    private numberArray: Array<number>;

    /**
     * Inicializa a classe, armazena o array de números
     * @param numberArray Array de números
     */
    constructor(numberArray: Array<number>){
        this.numberArray = numberArray;
    }

    /**
     * Retorna o maior valor do array de números
     * @returns O maior valor
     */
    private getMaxValue(): number{
        return Math.max(...this.numberArray);
    }

    /**
     * Retorna o menor valor do array de números
     * @returns O menor valor
     */
    private getMinValue(): number{
        return Math.min(...this.numberArray);
    }

    /**
     * Retorna a média de todos os valores do array de números
     */
    private getMedianValue(): number{
        return Math.floor(this.numberArray.reduce(this.sumNumbers) / this.numberArray.length);
    }

    /**
     * Soma dois números
     * @param previousValue Número 1
     * @param currentValue Número 2
     * @returns A soma dos 2 números
     */
    private sumNumbers(previousValue: number, currentValue: number): number{
        return previousValue += currentValue;
    }

    /**
     * Retorna o menor valor, o valor médio e o maior valor do array de números
     * @returns Um array contendo em ordem: o menor valor, a média de todos os valores e o maior valor
     */
    public getMinMedianMaxValues(): Array<number>{
        //Checa para ver se todos os elementos do array são números
        const isOnlyNumeric: boolean = this.numberArray.every((item: number): boolean=> /\d/g.test(item.toString()))
        if(isOnlyNumeric){
            const minValue: number = this.getMinValue();
            const medianValue: number = this.getMedianValue();
            const maxValue: number = this.getMaxValue();
            return [minValue, medianValue, maxValue];
        }else{
            console.error('A lista informada não contém apenas números!');
            return null;
        }
    }
}