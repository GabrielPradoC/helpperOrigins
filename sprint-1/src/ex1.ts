//Código referente à questão 1 do sprint 1

//Lógica para exemplificar o uso da função com um input de um formulário

const counterFormElement = document.getElementById('ex1-form') as HTMLFormElement;

counterFormElement.addEventListener('submit', (event: SubmitEvent) => {
  //Previne o recarregamento da página ao enviar o formulário
  event.preventDefault();
  const formInputElement = counterFormElement.firstElementChild as HTMLInputElement;
  const formOutput = document.getElementById('ex1-form-output') as HTMLInputElement;
  formOutput.value = getVowelCount(formInputElement.value).toString();
});

//Lógica para mostrar o resultado da execução da função com a palavra sendo recebida como parâmetro

const spanDisplayElement = document.getElementById('ex1-function-display-input') as HTMLSpanElement;
const vowelCountElement = document.getElementById('ex1-function-display-output') as HTMLInputElement;
const sampleText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus.';

spanDisplayElement.textContent = sampleText;
vowelCountElement.value = getVowelCount(sampleText).toString();

function getVowelCount(string: string): number {
  //Remove todos os caracteres que não forem vogais e retorna o tamanho da string restante
  return string.replace(/[^aeiou]/gi, '').length;
};