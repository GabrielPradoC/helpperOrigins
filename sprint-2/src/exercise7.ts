import { Table } from "./exercise7-classes/Table";
import { NumberArrayFunctional } from "./exercise7-classes/NumberArrayFunctional";
import { NumberArrayImperative } from "./exercise7-classes/NumberArrayImperative";
import { TableOutputHandler } from "./exercise7-classes/TableOutputHandler";
import { INumberArray } from "./Types";

const sampleNumberArray: Array<number> = [1,2,3,4,5,6,7,8,9];
const sampleUserNumberArray: Array<number> = [1,2,3];
const sampleNumberArray2: Array<number> = [8,33,25,15,11,94,41,95,29,91,21,55,21,26,18,70,0,50,10,88,16];
const sampleNumberClass1: INumberArray = new NumberArrayFunctional(sampleNumberArray);
const sampleNumberClass2: INumberArray = new NumberArrayImperative(sampleNumberArray2);
const sampleUserNumberClass: INumberArray = new NumberArrayFunctional(sampleUserNumberArray);

new TableOutputHandler(sampleNumberClass1, 'exercise7-table-results1');
new TableOutputHandler(sampleNumberClass2, 'exercise7-table-results2');
new Table(sampleUserNumberClass, 'exercise7-table-custom-array-input', 'exercise7-table-custom-array-output', 'exercise7-table-results3');