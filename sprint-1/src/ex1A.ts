import getVowelCount from "./getVowelCount";

const sampleTextDisplayElement: HTMLSpanElement = document.getElementById('ex1-function-display-input') as HTMLSpanElement;
const vowelCountDisplayElement: HTMLInputElement = document.getElementById('ex1-function-display-output') as HTMLInputElement;
const sampleText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus.';

sampleTextDisplayElement.textContent = sampleText;
vowelCountDisplayElement.value = getVowelCount(sampleText).toString();