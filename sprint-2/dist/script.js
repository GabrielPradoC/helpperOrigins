(()=>{"use strict";class t{constructor(t){this.string=t}getVowelCount(){return this.string.replace(/[^aeiou]/gi,"").length.toString()}}const e="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus.";new class extends t{constructor(t,e){super(t),this.displayVowelCountElemment=document.getElementById(e),this.updateVowelCountElement()}updateVowelCountElement(){this.displayVowelCountElemment.textContent=this.getVowelCount()}}(e,"exercise5-function-display-output"),document.getElementById("exercise5-function-display-input").value=e,new class{constructor(e){this.formElement=document.getElementById(e),this.formElement.addEventListener("submit",(e=>{e.preventDefault(),this.formInputElement=this.formElement.querySelector(".form-control"),this.vowelCountDisplayElement=this.formElement.querySelector("#form-control-output"),this.phrase=new t(this.formInputElement.value),this.vowelCountDisplayElement.textContent=this.phrase.getVowelCount()}))}}("exercise5-form")})();