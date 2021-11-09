import Phrase from "./exercise5-classes/Phrase";

/**
 * Classe para controlar um elemento form e lidar com o evento de submit
 */
class UserInputFormHandler{
    
    private formElement: HTMLFormElement;
    private formInputElement: HTMLInputElement;
    private vowelCountDisplayElement: HTMLSpanElement;
    private phrase: Phrase;

    /**
     * Armazena e adiciona um eventListener ao elemento form com o id informado
     * @param inputFormId 
     */
    constructor(inputFormId: string){
        this.formElement = document.getElementById(inputFormId) as HTMLFormElement;
        this.formElement.addEventListener('submit', (event: SubmitEvent): void =>{
            console.log('aa')
            //Previne o recarregamento da página
            event.preventDefault();
            this.formInputElement = this.formElement.querySelector('.form-control') as HTMLInputElement;
            this.vowelCountDisplayElement = this.formElement.querySelector('#form-control-output') as HTMLSpanElement;
            this.phrase = new Phrase(this.formInputElement.value)
            this.vowelCountDisplayElement.textContent = this.phrase.getVowelCount();
        })
    }
}

new UserInputFormHandler('exercise5-form');