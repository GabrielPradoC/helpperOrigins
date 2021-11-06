import { VowelCountOutputHandler } from "./exercise5-classes/VowelCountOutputHandler";

const sampleText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus.';
new VowelCountOutputHandler(sampleText, 'exercise5-function-display-output');
const displaySampleInputElement = document.getElementById('exercise5-function-display-input') as HTMLInputElement;

displaySampleInputElement.value = sampleText;