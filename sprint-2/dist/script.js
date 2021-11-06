(()=>{"use strict";var e;!function(e){e.name="name",e.bio="bio"}(e||(e={}));class t{static clearElementChildren(e){for(;e.children[0];)e.children[0].remove()}}new class extends class{constructor(e){this.personArray=e}getPersonNameById(t){return this.getPersonPropertyById(t,e.name)}getPersonBioById(t){return this.getPersonPropertyById(t,e.bio)}getPersonPropertyById(e,t){return this.personArray.find((t=>t.id===e))[t]}removePersonById(e){this.personArray=this.personArray.filter((t=>t.id!==e))}changePersonAttribute(e,t,i){this.personArray=this.personArray.map((n=>n.id===e?Object.assign(Object.assign({},n),{[t]:i}):n))}}{constructor(e){super(e),this.storeElements(),this.storeVariables(),this.loadPageItems(),this.setEventListeners(),this.updateDisplayedItem()}storeElements(){this.idSelectElement=document.getElementById("exercise6-id-select"),this.nameOutputElement=document.getElementById("exercise6-name-span"),this.bioOutputElement=document.getElementById("exercise6-bio-span"),this.editFormSelectElement=document.getElementById("exercise6-edit-form-select"),this.editFormElement=document.getElementById("exercise6-edit-form"),this.editFormInputElement=document.getElementById("exercise6-edit-form-input"),this.formDeleteButtonElement=document.getElementById("exercise6-form-delete-button"),this.formEditButtonElement=document.getElementById("exercise6-edit-form-submit-button")}storeVariables(){this.selectedEditField="name",this.selectedItemId=1}setEventListeners(){this.idSelectElement.addEventListener("change",(()=>{const e=this.idSelectElement.value;this.selectedItemId=parseInt(e);const t=this.getPersonNameById(this.selectedItemId),i=this.getPersonBioById(this.selectedItemId);this.nameOutputElement.textContent=t,this.bioOutputElement.textContent=i,"name"===this.selectedEditField?this.editFormInputElement.value=t:this.editFormInputElement.value=i})),this.editFormElement.addEventListener("submit",(e=>{e.preventDefault();const t=this.editFormInputElement.value;this.changePersonAttribute(this.selectedItemId,this.selectedEditField,t),this.updateDisplayedItem()})),this.editFormSelectElement.addEventListener("change",(()=>{this.selectedEditField=this.editFormSelectElement.value,this.updateDisplayedItem()})),this.formDeleteButtonElement.addEventListener("click",(()=>{this.removePersonById(this.selectedItemId),0!==this.personArray.length?this.loadPageItems():this.disableInterfaceElements()}))}updateDisplayedItem(){const e=new Event("change");this.idSelectElement.dispatchEvent(e)}loadPageItems(){const e=this.mapListItemsToOptions();t.clearElementChildren(this.idSelectElement),this.appendChildToSelect(e),this.updateDisplayedItem()}mapListItemsToOptions(){return this.personArray.map((e=>{const t=document.createElement("option");return t.value=e.id.toString(),t.innerText=e.id.toString(),t}))}appendChildToSelect(e){const t=document.createDocumentFragment();t.append(...e),this.idSelectElement.appendChild(t)}disableInterfaceElements(){this.formEditButtonElement.disabled=!0,this.formDeleteButtonElement.disabled=!0,this.editFormSelectElement.disabled=!0,this.editFormInputElement.disabled=!0,this.idSelectElement.disabled=!0,t.clearElementChildren(this.idSelectElement),this.nameOutputElement.textContent="",this.bioOutputElement.textContent="",this.editFormInputElement.value=""}}([{id:1,name:"Ada Lovelace",bio:"Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},{id:2,name:"Alan Turing",bio:"Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},{id:3,name:"Nikola Tesla",bio:"Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},{id:4,name:"Nicolau Copérnico",bio:"Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}])})();