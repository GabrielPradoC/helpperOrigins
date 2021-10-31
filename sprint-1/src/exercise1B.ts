import getVowelCount from './getVowelCount';

const vowelCountFormElement: HTMLFormElement = document.getElementById('exercise1-form') as HTMLFormElement;

vowelCountFormElement.addEventListener('submit', (event: SubmitEvent):void => {
  //Previne o recarregamento da página ao enviar o formulário
  event.preventDefault();
  const formInputElement = vowelCountFormElement.querySelector('.form-control') as HTMLInputElement;
  const vowelCountDisplayElement = vowelCountFormElement.querySelector('#form-control-output') as HTMLSpanElement;
  vowelCountDisplayElement.textContent = getVowelCount(formInputElement.value).toString();
});
