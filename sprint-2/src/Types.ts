export interface INumberArray{
    numberArray: Array<number>;
    getMinAverageMaxValues: ()=> Array<number>;
    generateRandom: (numberOfElements: number)=> void;
}