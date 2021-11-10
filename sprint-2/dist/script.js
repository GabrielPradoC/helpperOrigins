(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=void 0,(n="string")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this.string=e}var n,r;return n=t,(r=[{key:"getVowelCount",value:function(){return this.string.replace(/[^aeiou]/gi,"").length.toString()}}])&&e(n.prototype,r),t}();function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function i(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return l(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}var s="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus.";function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(m,e);var t,n,s,u,c=(s=m,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=a(s);if(u){var n=a(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return i(this,e)});function m(e,t){var n,r,o,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),i=void 0,(o="displayVowelCountElemment")in(r=l(n=c.call(this,e)))?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,n.displayVowelCountElemment=document.getElementById(t),n.updateVowelCountElement(),n}return t=m,(n=[{key:"updateVowelCountElement",value:function(){this.displayVowelCountElemment.textContent=this.getVowelCount()}}])&&r(t.prototype,n),m}(t))(s,"exercise5-function-display-output"),document.getElementById("exercise5-function-display-input").value=s,new function e(n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"formElement",void 0),u(this,"formInputElement",void 0),u(this,"vowelCountDisplayElement",void 0),u(this,"phrase",void 0),this.formElement=document.getElementById(n),this.formElement.addEventListener("submit",(function(e){e.preventDefault(),r.formInputElement=r.formElement.querySelector(".form-control"),r.vowelCountDisplayElement=r.formElement.querySelector("#form-control-output"),r.phrase=new t(r.formInputElement.value),r.vowelCountDisplayElement.textContent=r.phrase.getVowelCount()}))}("exercise5-form");var m,d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"clearElementChildren",value:function(e){for(;e.children[0];)e.children[0].remove()}}],null&&c(t.prototype,null),n&&c(t,n),e}();function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(e){e.name="name",e.bio="bio"}(m||(m={})),new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"idSelectElement",void 0),y(this,"nameOutputElement",void 0),y(this,"bioOutputElement",void 0),y(this,"editFormSelectElement",void 0),y(this,"editFormElement",void 0),y(this,"editFormInputElement",void 0),y(this,"formDeleteButtonElement",void 0),y(this,"formEditButtonElement",void 0),y(this,"selectedEditField",void 0),y(this,"selectedItemId",void 0),y(this,"personListObject",void 0),this.personListObject=t,this.storeElements(),this.storeVariables(),this.loadPageItems(),this.setEventListeners(),this.updateDisplayedItem()}var t,n;return t=e,(n=[{key:"storeElements",value:function(){this.idSelectElement=document.getElementById("exercise6-id-select"),this.nameOutputElement=document.getElementById("exercise6-name-span"),this.bioOutputElement=document.getElementById("exercise6-bio-span"),this.editFormSelectElement=document.getElementById("exercise6-edit-form-select"),this.editFormElement=document.getElementById("exercise6-edit-form"),this.editFormInputElement=document.getElementById("exercise6-edit-form-input"),this.formDeleteButtonElement=document.getElementById("exercise6-form-delete-button"),this.formEditButtonElement=document.getElementById("exercise6-edit-form-submit-button")}},{key:"storeVariables",value:function(){this.selectedEditField=m.name,this.selectedItemId=1}},{key:"setEventListeners",value:function(){this.setEditFormElementEventListener(),this.setIdSelectElementEventListener(),this.setFormDeleteButtonElementEventLister(),this.setEditFormSelectElementEventListener()}},{key:"setIdSelectElementEventListener",value:function(){var e=this;this.idSelectElement.addEventListener("change",(function(){var t=e.idSelectElement.value;e.selectedItemId=parseInt(t);var n=e.personListObject.getPersonNameById(e.selectedItemId),r=e.personListObject.getPersonBioById(e.selectedItemId);switch(e.nameOutputElement.textContent=n,e.bioOutputElement.textContent=r,e.selectedEditField){case m.name:e.editFormInputElement.value=n;break;case m.bio:e.editFormInputElement.value=r}}))}},{key:"setEditFormElementEventListener",value:function(){var e=this;this.editFormElement.addEventListener("submit",(function(t){t.preventDefault();var n=e.editFormInputElement.value;e.personListObject.changePersonAttribute(e.selectedItemId,e.selectedEditField,n),e.updateDisplayedItem()}))}},{key:"setEditFormSelectElementEventListener",value:function(){var e=this;this.editFormSelectElement.addEventListener("change",(function(){e.selectedEditField=e.editFormSelectElement.value,e.updateDisplayedItem()}))}},{key:"setFormDeleteButtonElementEventLister",value:function(){var e=this;this.formDeleteButtonElement.addEventListener("click",(function(){e.personListObject.removePersonById(e.selectedItemId),0!==e.personListObject.personArray.length?e.loadPageItems():e.disableInterfaceElements()}))}},{key:"updateDisplayedItem",value:function(){var e=new Event("change");this.idSelectElement.dispatchEvent(e)}},{key:"loadPageItems",value:function(){var e=this.mapListItemsToOptions();d.clearElementChildren(this.idSelectElement),this.appendChildToSelect(e),this.updateDisplayedItem()}},{key:"mapListItemsToOptions",value:function(){return this.personListObject.personArray.map((function(e){var t=document.createElement("option");return t.value=e.id.toString(),t.innerText=e.id.toString(),t}))}},{key:"appendChildToSelect",value:function(e){var t,n=document.createDocumentFragment();n.append.apply(n,function(e){if(Array.isArray(e))return f(e)}(t=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),this.idSelectElement.appendChild(n)}},{key:"disableInterfaceElements",value:function(){this.formEditButtonElement.disabled=!0,this.formDeleteButtonElement.disabled=!0,this.editFormSelectElement.disabled=!0,this.editFormInputElement.disabled=!0,this.idSelectElement.disabled=!0,d.clearElementChildren(this.idSelectElement),this.nameOutputElement.textContent="",this.bioOutputElement.textContent="",this.editFormInputElement.value=""}}])&&p(t.prototype,n),e}())(new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),E(this,"personArray",void 0),this.personArray=t}var t,n;return t=e,(n=[{key:"getPersonNameById",value:function(e){return this.getPersonPropertyById(e,m.name)}},{key:"getPersonBioById",value:function(e){return this.getPersonPropertyById(e,m.bio)}},{key:"getPersonPropertyById",value:function(e,t){var n=this.personArray.find((function(t){return t.id===e}));if(!n)throw new Error("Não foi possível encontrar a pessoa com o id encontrado");return n[t]}},{key:"removePersonById",value:function(e){this.personArray=this.personArray.filter((function(t){return t.id!==e}))}},{key:"changePersonAttribute",value:function(e,t,n){this.personArray=this.personArray.map((function(r){return r.id===e?v(v({},r),{},E({},t,n)):r}))}}])&&b(t.prototype,n),e}())([{id:1,name:"Ada Lovelace",bio:"Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},{id:2,name:"Alan Turing",bio:"Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},{id:3,name:"Nikola Tesla",bio:"Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},{id:4,name:"Nicolau Copérnico",bio:"Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}]))})();