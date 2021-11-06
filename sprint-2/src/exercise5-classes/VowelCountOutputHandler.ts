import Phrase from "./Phrase";

/**
 * Classe para atribuir o textContent do elemento com o id informado com o número de vogais presentes na string informada
 */
export class VowelCountOutputHandler extends Phrase {

    private displayVowelCountElemment: HTMLSpanElement;

    /**
     * Substitui o textContent do elemento com o id informado pela quantidade de vogais presentes na string informada
     * @param text String
     * @param vowelCountElementId Id do elemento para editar o textContent
     */
    constructor(text: string, vowelCountElementId: string){
        super(text);
        this.displayVowelCountElemment = document.getElementById(vowelCountElementId) as HTMLSpanElement;
        this.updateVowelCountElement();
    }

    private updateVowelCountElement(): void{
        this.displayVowelCountElemment.textContent = this.getVowelCount();
    }

}
