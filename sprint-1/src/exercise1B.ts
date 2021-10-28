import getVowelCount from './getVowelCount';

const vowelCountFormElement: HTMLFormElement = document.getElementById('exercise1-form') as HTMLFormElement;

vowelCountFormElement.addEventListener('submit', (event: SubmitEvent):void => {
  //Previne o recarregamento da página ao enviar o formulário
  event.preventDefault();
  const formInputElement: HTMLInputElement = vowelCountFormElement.firstElementChild as HTMLInputElement;
  const vowelCountDisplayElement: HTMLInputElement = document.getElementById('exercise1-form-output') as HTMLInputElement;
  vowelCountDisplayElement.value = getVowelCount(formInputElement.value).toString();
});
