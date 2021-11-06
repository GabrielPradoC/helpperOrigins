import { PersonListFunctional } from "./PersonListFunctional";
import { Person } from "../Types";
import { Utils } from "./Utils";

/**
 * Classe responsável por administrar o formulário e os inputs do exercicio 6
 */
export class EditPersonFormHandler extends PersonListFunctional{

    private idSelectElement :  HTMLSelectElement;
    private nameOutputElement :  HTMLParagraphElement;
    private bioOutputElement :  HTMLParagraphElement;
    private editFormSelectElement :  HTMLSelectElement;
    private editFormElement :  HTMLFormElement;
    private editFormInputElement :  HTMLInputElement;
    private formDeleteButtonElement :  HTMLInputElement;
    private formEditButtonElement :  HTMLInputElement;
    private selectedEditField: string;
    private selectedItemId: number;

    /**
     * Armazena o array e executa algumas funções de inicialização da classe
     * @param personArray Array com vários objetos do tipo pessoa
     */
    constructor(personArray: Array<Person>){
        super(personArray);
        this.storeElements();
        this.storeVariables();
        this.loadPageItems();
        this.setEventListeners();
        this.updateDisplayedItem();
    }

    /**
     * Armazena os elementos html
     */
    private storeElements(): void{
        this.idSelectElement = document.getElementById('exercise6-id-select') as HTMLSelectElement;
        this.nameOutputElement = document.getElementById('exercise6-name-span') as HTMLParagraphElement;
        this.bioOutputElement = document.getElementById('exercise6-bio-span') as HTMLParagraphElement;
        this.editFormSelectElement = document.getElementById('exercise6-edit-form-select') as HTMLSelectElement;
        this.editFormElement = document.getElementById('exercise6-edit-form') as HTMLFormElement;
        this.editFormInputElement = document.getElementById('exercise6-edit-form-input') as HTMLInputElement;
        this.formDeleteButtonElement = document.getElementById('exercise6-form-delete-button') as HTMLInputElement;
        this.formEditButtonElement = document.getElementById('exercise6-edit-form-submit-button') as HTMLInputElement;
    }

    /**
     * Inicializa 2 variáveis para controlar qual elemento está sendo manipulado no momento
     * Valores para carregar o nome do primeiro elemento ao finalizar o carregamento da página
     */
    private storeVariables(): void{
        this.selectedEditField = 'name';
        this.selectedItemId = 1;
    }

    /**
     * Inicializa os eventListeners para interação com o formulário de edição
     */
    private setEventListeners(): void{
        //Event listener responsável por mudar qual elemento está sendo exibido na tela por vez
        this.idSelectElement.addEventListener('change', (): void=>{
            const inputIdString: string = this.idSelectElement.value;
            this.selectedItemId = parseInt(inputIdString);
            const personName: string = this.getPersonNameById(this.selectedItemId);
            const personBio: string = this.getPersonBioById(this.selectedItemId);
            this.nameOutputElement.textContent = personName;
            this.bioOutputElement.textContent = personBio;
            if(this.selectedEditField === 'name'){
                this.editFormInputElement.value = personName;
            }else{
                this.editFormInputElement.value = personBio;
            }
        });

        //Event listener responsável por sinalizar quando o usuário enviar um input requisitando uma mudança em um objeto
        this.editFormElement.addEventListener('submit',(event: SubmitEvent): void =>{
            //Para evitar o recarregamento da página
            event.preventDefault();
            const propertyNewValue: string = this.editFormInputElement.value;
            this.changePersonAttribute(this.selectedItemId, this.selectedEditField, propertyNewValue)
            this.updateDisplayedItem();
        });

        //Event listener responsável por mudar qual atributo do objeto está sendo exibido no momento no campo de edição
        this.editFormSelectElement.addEventListener('change', (): void=>{
            this.selectedEditField = this.editFormSelectElement.value;
            this.updateDisplayedItem();
        });

        //Event listener responsável por sinalizar quando o usuário enviar um input requisitando a remoção de um objeto
        this.formDeleteButtonElement.addEventListener('click', (): void=>{
            this.removePersonById(this.selectedItemId);
            if(this.personArray.length === 0){
                this.disableInterfaceElements();
                return;
            }
            this.loadPageItems();
        });
    }

    /**
    * Dispara um evento para recriar qual item está sendo exibido na página
    */
    private updateDisplayedItem(): void{
        const changeEvent: Event = new Event('change');
        this.idSelectElement.dispatchEvent(changeEvent);
    }

    /**
     * Cria os elementos option a partir do array de objetos tipo pessoa, anexa eles ao devido elemento select e depois atualiza qual item está sendo exibido
     */
    private loadPageItems(): void{
        const optionsArray: Array<HTMLOptionElement> = this.mapListItemsToOptions();
        Utils.clearElementChildren(this.idSelectElement);
        this.appendChildToSelect(optionsArray);
        this.updateDisplayedItem();
    }

    /**
    * Mapeia o array personArray para elementos option e retorna um array de elementos option
    */
    private mapListItemsToOptions(): Array<HTMLOptionElement>{
        return this.personArray.map((person: Person): HTMLOptionElement=>{
            const optionElement = document.createElement('option') as HTMLOptionElement;
            optionElement.value = person.id.toString();
            optionElement.innerText = person.id.toString();
            return optionElement;
        });
    }

    /**
     * Anexa os elementos option ao devido elemento select
     * @param optionsArray Array contendo elementos option
     */
    private appendChildToSelect(optionsArray: Array<HTMLOptionElement>): void{
        const documentFragment = document.createDocumentFragment() as DocumentFragment;
        documentFragment.append(...optionsArray);
        this.idSelectElement.appendChild(documentFragment);
    }

    /**
     * Desabilita os elementos de input da interface e remove qualquer conteúdo dos mesmos
     */
    private disableInterfaceElements(): void{
        this.formEditButtonElement.disabled = true;
        this.formDeleteButtonElement.disabled = true;
        this.editFormSelectElement.disabled = true;
        this.editFormInputElement.disabled = true;
        this.idSelectElement.disabled = true;
        Utils.clearElementChildren(this.idSelectElement);
        this.nameOutputElement.textContent = '';
        this.bioOutputElement.textContent = '';
        this.editFormInputElement.value = '';
    }
}