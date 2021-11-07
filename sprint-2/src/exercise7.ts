import { GenerateRandomUserTableData } from "./exercise7-classes/GenerateRandomUserTableData";
import { TableOutputHandler } from "./exercise7-classes/TableOutputHandler";

const sampleNumberArray: Array<number> = [1,2,3,4,5,6,7,8,9];
const sampleNumberArray2: Array<number> = [8,33,25,15,11,94,41,95,29,91,21,55,21,26,18,70,0,50,10,88,16];
new TableOutputHandler(sampleNumberArray, 'exercise7-table-results1');
new TableOutputHandler(sampleNumberArray2, 'exercise7-table-results2');
new GenerateRandomUserTableData('exercise7-table-custom-array-input', 'exercise7-table-custom-array-output', 'exercise7-table-results3');