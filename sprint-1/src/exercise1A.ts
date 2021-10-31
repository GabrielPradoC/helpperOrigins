import getVowelCount from './getVowelCount';

const sampleTextDisplayElement = document.getElementById('exercise1-function-display-input') as HTMLInputElement;
const vowelCountDisplayElement = document.getElementById('exercise1-function-display-output') as HTMLSpanElement;
const sampleText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus.';

sampleTextDisplayElement.value = sampleText;
vowelCountDisplayElement.textContent = getVowelCount(sampleText).toString();