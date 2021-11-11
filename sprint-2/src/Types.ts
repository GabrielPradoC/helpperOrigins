export interface INumberArray{
    numberArray: Array<number>;
    getMinAverageMaxValues: ()=> Array<number>;
    generateRandomNumbersArray: (numberOfElements: number)=> void;
}