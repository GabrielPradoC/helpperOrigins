var counterFormElement = document.getElementById('ex1-form');
counterFormElement.addEventListener('submit', function (event) {
    event.preventDefault();
    var formInputElement = counterFormElement.firstElementChild;
    var formOutput = document.getElementById('ex1-form-output');
    formOutput.value = getVowelCount(formInputElement.value).toString();
});
var spanDisplayElement = document.getElementById('ex1-function-display-input');
var vowelCountElement = document.getElementById('ex1-function-display-output');
var sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus.';
spanDisplayElement.textContent = sampleText;
vowelCountElement.value = getVowelCount(sampleText).toString();
function getVowelCount(string) {
    return string.replace(/[^aeiou]/gi, '').length;
}
;
