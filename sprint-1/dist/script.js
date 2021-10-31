/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/exercise1A.ts":
/*!***************************!*\
  !*** ./src/exercise1A.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getVowelCount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getVowelCount */ \"./src/getVowelCount.ts\");\n\r\nconst sampleTextDisplayElement = document.getElementById('exercise1-function-display-input');\r\nconst vowelCountDisplayElement = document.getElementById('exercise1-function-display-output');\r\nconst sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus.';\r\nsampleTextDisplayElement.value = sampleText;\r\nvowelCountDisplayElement.textContent = (0,_getVowelCount__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sampleText).toString();\r\n\n\n//# sourceURL=webpack://sprint-1/./src/exercise1A.ts?");

/***/ }),

/***/ "./src/exercise1B.ts":
/*!***************************!*\
  !*** ./src/exercise1B.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getVowelCount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getVowelCount */ \"./src/getVowelCount.ts\");\n\r\nconst vowelCountFormElement = document.getElementById('exercise1-form');\r\nvowelCountFormElement.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n    const formInputElement = vowelCountFormElement.querySelector('.form-control');\r\n    const vowelCountDisplayElement = vowelCountFormElement.querySelector('#form-control-output');\r\n    vowelCountDisplayElement.textContent = (0,_getVowelCount__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(formInputElement.value).toString();\r\n});\r\n\n\n//# sourceURL=webpack://sprint-1/./src/exercise1B.ts?");

/***/ }),

/***/ "./src/exercise2.ts":
/*!**************************!*\
  !*** ./src/exercise2.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"personList\": () => (/* binding */ personList),\n/* harmony export */   \"loadPageItems\": () => (/* binding */ loadPageItems)\n/* harmony export */ });\n/* harmony import */ var _exercise2A__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exercise2A */ \"./src/exercise2A.ts\");\n/* harmony import */ var _exercise2B__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercise2B */ \"./src/exercise2B.ts\");\n/* harmony import */ var _exercise2C__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercise2C */ \"./src/exercise2C.ts\");\n/* harmony import */ var _exercise2D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exercise2D */ \"./src/exercise2D.ts\");\n\r\n\r\n\r\n\r\nlet personList = [\r\n    { \"id\": 1, \"name\": \"Ada Lovelace\", \"bio\": \"Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina\" },\r\n    { \"id\": 2, \"name\": \"Alan Turing\", \"bio\": \"Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia\" },\r\n    { \"id\": 3, \"name\": \"Nikola Tesla\", \"bio\": \"Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.\" },\r\n    { \"id\": 4, \"name\": \"Nicolau Copérnico\", \"bio\": \"Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.\" }\r\n];\r\nconst idSelectElement = document.getElementById('exercise2-id-select');\r\nconst nameOutputElement = document.getElementById('exercise2-name-span');\r\nconst bioOutputElement = document.getElementById('exercise2-bio-span');\r\nconst editFormSelectElement = document.getElementById('exercise2-edit-form-select');\r\nconst editFormElement = document.getElementById('exercise2-edit-form');\r\nconst editFormInputElement = document.getElementById('exercise2-edit-form-input');\r\nconst formDeleteButtonElement = document.getElementById('exercise2-form-delete-button');\r\nconst formEditButtonElement = document.getElementById('exercise2-edit-form-submit-button');\r\nlet selectedEditField = 'name';\r\nlet selectedItemId = 1;\r\nidSelectElement.addEventListener('change', () => {\r\n    const inputIdString = idSelectElement.value;\r\n    const integerId = parseInt(inputIdString);\r\n    selectedItemId = integerId;\r\n    const personName = (0,_exercise2B__WEBPACK_IMPORTED_MODULE_1__.getPersonNameByIdImperative)(personList, integerId);\r\n    const personBio = (0,_exercise2A__WEBPACK_IMPORTED_MODULE_0__.getPersonBioByIdFunctional)(personList, integerId);\r\n    nameOutputElement.textContent = personName;\r\n    bioOutputElement.textContent = personBio;\r\n    if (selectedEditField === 'name') {\r\n        editFormInputElement.value = personName;\r\n    }\r\n    else {\r\n        editFormInputElement.value = personBio;\r\n    }\r\n});\r\neditFormElement.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n    const propertyNewValue = editFormInputElement.value;\r\n    personList = (0,_exercise2D__WEBPACK_IMPORTED_MODULE_3__.changePersonPropertyImperative)(personList, selectedItemId, selectedEditField, propertyNewValue);\r\n    updateDisplayedItem();\r\n});\r\neditFormSelectElement.addEventListener('change', () => {\r\n    selectedEditField = editFormSelectElement.value;\r\n    updateDisplayedItem();\r\n});\r\nformDeleteButtonElement.addEventListener('click', () => {\r\n    personList = (0,_exercise2C__WEBPACK_IMPORTED_MODULE_2__.deletePersonByIdFunctional)(personList, selectedItemId);\r\n    if (personList.length === 0) {\r\n        formEditButtonElement.disabled = true;\r\n        formDeleteButtonElement.disabled = true;\r\n        editFormSelectElement.disabled = true;\r\n        idSelectElement.disabled = true;\r\n        clearElementChildren(idSelectElement);\r\n        return;\r\n    }\r\n    loadPageItems(personList);\r\n    updateDisplayedItem();\r\n});\r\nfunction updateDisplayedItem() {\r\n    const updateUi = new Event('change');\r\n    idSelectElement.dispatchEvent(updateUi);\r\n}\r\nfunction mapListItemsToOptions(personList) {\r\n    clearElementChildren(idSelectElement);\r\n    const personOptions = personList.map((item) => {\r\n        const optionElement = document.createElement('option');\r\n        optionElement.value = item.id.toString();\r\n        optionElement.innerText = item.id.toString();\r\n        return optionElement;\r\n    });\r\n    return personOptions;\r\n}\r\nfunction appendChildToSelect(optionArray) {\r\n    const documentFragment = document.createDocumentFragment();\r\n    documentFragment.append(...optionArray);\r\n    idSelectElement.appendChild(documentFragment);\r\n}\r\nfunction loadPageItems(personList) {\r\n    const optionsArray = mapListItemsToOptions(personList);\r\n    appendChildToSelect(optionsArray);\r\n    updateDisplayedItem();\r\n}\r\nfunction clearElementChildren(element) {\r\n    while (element.children[0]) {\r\n        const firstChild = element.children[0];\r\n        firstChild.remove();\r\n    }\r\n    ;\r\n}\r\n\n\n//# sourceURL=webpack://sprint-1/./src/exercise2.ts?");

/***/ }),

/***/ "./src/exercise2A.ts":
/*!***************************!*\
  !*** ./src/exercise2A.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPersonBioByIdFunctional\": () => (/* binding */ getPersonBioByIdFunctional)\n/* harmony export */ });\nfunction getPersonBioByIdFunctional(personList, id) {\r\n    const [desiredItem] = personList.filter((item) => item.id === id);\r\n    return desiredItem.bio;\r\n}\r\nfunction getPersonBioByIdImperative(personList, id) {\r\n    let desiredItem = null;\r\n    for (let i = 0; i < personList.length; i++) {\r\n        if (personList[i].id === id) {\r\n            desiredItem = personList[i];\r\n            break;\r\n        }\r\n    }\r\n    return desiredItem.bio;\r\n}\r\n\n\n//# sourceURL=webpack://sprint-1/./src/exercise2A.ts?");

/***/ }),

/***/ "./src/exercise2B.ts":
/*!***************************!*\
  !*** ./src/exercise2B.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPersonNameByIdImperative\": () => (/* binding */ getPersonNameByIdImperative)\n/* harmony export */ });\nfunction getPersonNameByIdFunctional(personList, id) {\r\n    const [desiredItem] = personList.filter((item) => item.id === id);\r\n    return desiredItem.name;\r\n}\r\nfunction getPersonNameByIdImperative(personList, id) {\r\n    let desiredItem = null;\r\n    for (let i = 0; i < personList.length; i++) {\r\n        if (personList[i].id === id) {\r\n            desiredItem = personList[i];\r\n            break;\r\n        }\r\n    }\r\n    return desiredItem.name;\r\n}\r\n\n\n//# sourceURL=webpack://sprint-1/./src/exercise2B.ts?");

/***/ }),

/***/ "./src/exercise2C.ts":
/*!***************************!*\
  !*** ./src/exercise2C.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deletePersonByIdFunctional\": () => (/* binding */ deletePersonByIdFunctional)\n/* harmony export */ });\nfunction deletePersonByIdFunctional(personList, id) {\r\n    const hasDifferentId = (item) => item.id !== id;\r\n    return personList.filter(hasDifferentId);\r\n}\r\nfunction deletePersonByIdImperative(personList, id) {\r\n    const filteredArray = [];\r\n    for (let i = 0; i < personList.length; i++) {\r\n        if (personList[i].id !== id) {\r\n            filteredArray.push(personList[i]);\r\n        }\r\n    }\r\n    return filteredArray;\r\n}\r\n\n\n//# sourceURL=webpack://sprint-1/./src/exercise2C.ts?");

/***/ }),

/***/ "./src/exercise2D.ts":
/*!***************************!*\
  !*** ./src/exercise2D.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changePersonPropertyImperative\": () => (/* binding */ changePersonPropertyImperative)\n/* harmony export */ });\nfunction changePersonPropertyFunctional(personList, id, propertyName, propertyNewValue) {\r\n    const findAndChangeItemProperty = (item) => {\r\n        if (item.id === id) {\r\n            return Object.assign(Object.assign({}, item), { [propertyName]: propertyNewValue });\r\n        }\r\n        else {\r\n            return item;\r\n        }\r\n    };\r\n    const editedArray = personList.map(findAndChangeItemProperty);\r\n    return editedArray;\r\n}\r\nfunction changePersonPropertyImperative(personList, id, propertyName, propertyNewValue) {\r\n    const editedArray = [];\r\n    for (let i = 0; i < personList.length; i++) {\r\n        if (personList[i].id === id) {\r\n            editedArray.push(Object.assign(Object.assign({}, personList[i]), { [propertyName]: propertyNewValue }));\r\n        }\r\n        else {\r\n            editedArray.push(personList[i]);\r\n        }\r\n    }\r\n    return editedArray;\r\n}\r\n\n\n//# sourceURL=webpack://sprint-1/./src/exercise2D.ts?");

/***/ }),

/***/ "./src/exercise3.ts":
/*!**************************!*\
  !*** ./src/exercise3.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateUserRandomValues\": () => (/* binding */ generateUserRandomValues)\n/* harmony export */ });\nconst customUserInputElement = document.getElementById('exercise3-table-custom-array-input');\r\nconst sampleNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];\r\nconst sampleNumberArray2 = [8, 33, 25, 15, 11, 94, 41, 95, 29, 91, 21, 55, 21, 26, 18, 70, 0, 50, 10, 88, 16];\r\nprocessNumberArrayToTable(sampleNumberArray, 'exercise3-table-results1');\r\nprocessNumberArrayToTableImperative(sampleNumberArray2, 'exercise3-table-results2');\r\ncustomUserInputElement.addEventListener('change', () => {\r\n    generateUserRandomValues();\r\n});\r\nfunction getMinMedianMaxValueFunctional(array) {\r\n    const isOnlyNumeric = array.every((item) => /^[0-9]{1,}$/.test(item.toString()));\r\n    if (isOnlyNumeric) {\r\n        const arrayCopy = [...array];\r\n        const maxValue = Math.max(...arrayCopy);\r\n        const minValue = Math.min(...arrayCopy);\r\n        const sum = (previousValue, currentValue) => previousValue += currentValue;\r\n        const medianValue = Math.round(arrayCopy.reduce(sum) / arrayCopy.length);\r\n        return [minValue, medianValue, maxValue];\r\n    }\r\n    else {\r\n        console.error('A lista informada não contém apenas números!');\r\n        return null;\r\n    }\r\n}\r\nfunction getMinMedianMaxValueImperative(array) {\r\n    const isOnlyNumeric = array.every((item) => /^[0-9]{1,}$/.test(item.toString()));\r\n    if (isOnlyNumeric) {\r\n        const arrayCopy = [...array];\r\n        let maxValue = -Infinity;\r\n        let minValue = Infinity;\r\n        let medianValue = 0;\r\n        for (let number of arrayCopy) {\r\n            if (number > maxValue) {\r\n                maxValue = number;\r\n            }\r\n            if (number < minValue) {\r\n                minValue = number;\r\n            }\r\n            medianValue += number;\r\n        }\r\n        medianValue = Math.round(medianValue / arrayCopy.length);\r\n        return [minValue, medianValue, maxValue];\r\n    }\r\n    else {\r\n        console.error('A lista informada não contém apenas números!');\r\n        return null;\r\n    }\r\n}\r\nfunction createTableDataArray(array) {\r\n    const tableDataElementArray = [];\r\n    for (let number of array) {\r\n        const tableDataElement = document.createElement('td');\r\n        tableDataElement.innerText = number.toString();\r\n        tableDataElementArray.push(tableDataElement);\r\n    }\r\n    return tableDataElementArray;\r\n}\r\nfunction appendElements(array, targetElement) {\r\n    const documentFragment = document.createDocumentFragment();\r\n    documentFragment.append(...array);\r\n    targetElement.appendChild(documentFragment);\r\n}\r\nfunction processNumberArrayToTable(array, targetTableId) {\r\n    const tableOutputElement = document.getElementById(targetTableId);\r\n    const sortedSampleValues = getMinMedianMaxValueFunctional(array);\r\n    const tableDataArray = createTableDataArray(sortedSampleValues);\r\n    appendElements(tableDataArray, tableOutputElement);\r\n}\r\nfunction processNumberArrayToTableImperative(array, targetTableId) {\r\n    const tableOutputElement = document.getElementById(targetTableId);\r\n    const sortedSampleValues = getMinMedianMaxValueImperative(array);\r\n    const tableDataArray = createTableDataArray(sortedSampleValues);\r\n    appendElements(tableDataArray, tableOutputElement);\r\n}\r\nfunction generateRandomNumbersArray(howMany) {\r\n    const numberArray = [];\r\n    for (let i = 0; i < howMany; i++) {\r\n        numberArray.push(Math.floor(Math.random() * 100));\r\n    }\r\n    return numberArray;\r\n}\r\nfunction generateUserRandomValues() {\r\n    const userNumberInput = parseInt(customUserInputElement.value);\r\n    const isInRange = (userNumberInput <= 15) && (userNumberInput >= 3);\r\n    if (isInRange) {\r\n        const randomNumbersArray = generateRandomNumbersArray(userNumberInput);\r\n        const displayCustomUserArrayElement = document.getElementById('exercise3-table-custom-array-output');\r\n        displayCustomUserArrayElement.textContent = `${randomNumbersArray.join(',')}`;\r\n        deleteElementChildren('exercise3-table-results3');\r\n        processNumberArrayToTable(randomNumbersArray, 'exercise3-table-results3');\r\n    }\r\n}\r\nfunction deleteElementChildren(elementId) {\r\n    const parentElement = document.getElementById(elementId);\r\n    while (parentElement.children[0]) {\r\n        const firstChild = parentElement.children[0];\r\n        firstChild.remove();\r\n    }\r\n    ;\r\n}\r\n\n\n//# sourceURL=webpack://sprint-1/./src/exercise3.ts?");

/***/ }),

/***/ "./src/exercise4.ts":
/*!**************************!*\
  !*** ./src/exercise4.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exercise2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exercise2 */ \"./src/exercise2.ts\");\n\r\nlet listCopy = [..._exercise2__WEBPACK_IMPORTED_MODULE_0__.personList];\r\nconst outputTableElement = document.getElementById('exercise4-table-body');\r\nconst editFormElement = document.getElementById('exercise4-table-edit-form');\r\neditFormElement.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n    const clickedButtonElement = event.submitter;\r\n    const editingPersonId = parseInt(clickedButtonElement.value);\r\n    const personExists = !!listCopy.find((item) => item.id === editingPersonId);\r\n    if ((clickedButtonElement.value === 'cancel') || (!personExists)) {\r\n        deleteElementChildren(editFormElement);\r\n    }\r\n    else {\r\n        const nameInputElement = editFormElement.querySelector('.name-input');\r\n        const bioInputElement = editFormElement.querySelector('.bio-input');\r\n        const oldPersonIndex = listCopy.findIndex((item) => item.id === editingPersonId);\r\n        listCopy[oldPersonIndex].name = nameInputElement.value;\r\n        listCopy[oldPersonIndex].bio = bioInputElement.value;\r\n        deleteElementChildren(outputTableElement);\r\n        updateUi();\r\n    }\r\n});\r\ncreateAndAppendPersonData(listCopy);\r\nfunction createAndAppendPersonData(itemArray) {\r\n    const tableRowArray = itemArray.map(createPersonTableRow);\r\n    outputTableElement.append(...tableRowArray);\r\n}\r\nfunction createPersonTableRow(item) {\r\n    const tableRowElement = document.createElement('tr');\r\n    const personTableData = createPersonTableData(item);\r\n    tableRowElement.id = `exercise4-table-row-person-${item.id}`;\r\n    tableRowElement.append(...personTableData);\r\n    const actionButtons = createTableActionButtons(item.id);\r\n    const tableDataCellActions = document.createElement('td');\r\n    tableDataCellActions.appendChild(actionButtons);\r\n    tableRowElement.appendChild(tableDataCellActions);\r\n    return tableRowElement;\r\n}\r\nfunction createPersonTableData(item) {\r\n    const tableRowArray = [];\r\n    for (let property in item) {\r\n        const tableCellElement = document.createElement('td');\r\n        tableCellElement.textContent = `${item[property]}`;\r\n        tableCellElement.className = `exercise4-table-data-person-${property}`;\r\n        tableRowArray.push(tableCellElement);\r\n    }\r\n    return tableRowArray;\r\n}\r\nfunction createTableActionButtons(personId) {\r\n    const tableEditButton = document.createElement('button');\r\n    const tableDeleteButton = document.createElement('button');\r\n    const divElement = document.createElement('div');\r\n    divElement.className = 'btn-group';\r\n    tableEditButton.innerText = 'Editar';\r\n    tableEditButton.className = 'btn btn-outline-secondary';\r\n    tableDeleteButton.className = 'btn btn-outline-danger';\r\n    tableDeleteButton.innerText = 'Deletar';\r\n    tableDeleteButton.addEventListener('click', deleteTableRowElement.bind(this, personId));\r\n    tableEditButton.addEventListener('click', createEditInputElement.bind(this, personId));\r\n    divElement.append(tableEditButton, tableDeleteButton);\r\n    return divElement;\r\n}\r\nfunction getPersonInfo(personId) {\r\n    const [requestedPerson] = listCopy.filter((person) => person.id === personId);\r\n    return requestedPerson;\r\n}\r\nfunction deleteTableRowElement(personId) {\r\n    const tableBody = document.getElementById('exercise4-table-body');\r\n    deleteElementChildren(tableBody);\r\n    listCopy = listCopy.filter((item) => item.id !== personId);\r\n    updateUi();\r\n}\r\nfunction createEditInputElement(personId) {\r\n    const formAlreadyExists = !!editFormElement.childElementCount;\r\n    const person = getPersonInfo(personId);\r\n    if (formAlreadyExists) {\r\n        const nameInputElement = editFormElement.querySelector('.name-input');\r\n        const bioInputElement = editFormElement.querySelector('.bio-input');\r\n        const formConfirmButtonElement = editFormElement.querySelector('.confirm-edit');\r\n        nameInputElement.value = person.name;\r\n        bioInputElement.value = person.bio;\r\n        formConfirmButtonElement.value = personId.toString();\r\n    }\r\n    else {\r\n        createEditPersonForm(person.name, person.bio, person.id);\r\n    }\r\n}\r\nfunction createEditPersonForm(name, bio, id) {\r\n    const nameEditFieldElement = createInputWithLabel('Nome: ', 'name', name);\r\n    const bioEditFieldElement = createInputWithLabel('Bio: ', 'bio', bio);\r\n    const confirmEditButton = document.createElement('button');\r\n    const cancelEditButton = document.createElement('button');\r\n    confirmEditButton.innerText = 'Confirmar edição';\r\n    confirmEditButton.className = 'btn btn-outline-success';\r\n    cancelEditButton.innerText = 'Cancelar edição';\r\n    cancelEditButton.className = 'btn btn-outline-danger';\r\n    confirmEditButton.classList.add('confirm-edit');\r\n    cancelEditButton.classList.add('cancel-edit');\r\n    confirmEditButton.value = id.toString();\r\n    cancelEditButton.value = 'cancel';\r\n    confirmEditButton.type = 'submit';\r\n    cancelEditButton.type = 'submit';\r\n    const divElement = document.createElement('div');\r\n    divElement.className = 'card';\r\n    const divElementCardBody = document.createElement('div');\r\n    divElementCardBody.className = 'card-body';\r\n    divElementCardBody.append(nameEditFieldElement, bioEditFieldElement, confirmEditButton, cancelEditButton);\r\n    divElement.appendChild(divElementCardBody);\r\n    editFormElement.appendChild(divElement);\r\n}\r\nfunction createInputWithLabel(labelText, labelClassName, inputString) {\r\n    const divElement = document.createElement('div');\r\n    const spanElement = document.createElement('span');\r\n    const inputElement = document.createElement('input');\r\n    divElement.className = 'input-group mb-3';\r\n    inputElement.type = 'text';\r\n    inputElement.value = inputString;\r\n    inputElement.className = `${labelClassName}-input form-control`;\r\n    spanElement.textContent = labelText;\r\n    spanElement.className = 'input-group-text';\r\n    divElement.append(spanElement, inputElement);\r\n    return divElement;\r\n}\r\nfunction deleteElementChildren(element) {\r\n    while (element.children[0]) {\r\n        const firstChild = element.children[0];\r\n        firstChild.remove();\r\n    }\r\n    ;\r\n}\r\nfunction updateUi() {\r\n    createAndAppendPersonData(listCopy);\r\n}\r\n\n\n//# sourceURL=webpack://sprint-1/./src/exercise4.ts?");

/***/ }),

/***/ "./src/getVowelCount.ts":
/*!******************************!*\
  !*** ./src/getVowelCount.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getVowelCount)\n/* harmony export */ });\nfunction getVowelCount(string) {\r\n    return string.replace(/[^aeiou]/gi, '').length;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack://sprint-1/./src/getVowelCount.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exercise1A__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exercise1A */ \"./src/exercise1A.ts\");\n/* harmony import */ var _exercise1B__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercise1B */ \"./src/exercise1B.ts\");\n/* harmony import */ var _exercise2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercise2 */ \"./src/exercise2.ts\");\n/* harmony import */ var _exercise3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exercise3 */ \"./src/exercise3.ts\");\n/* harmony import */ var _exercise4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exercise4 */ \"./src/exercise4.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('load', () => {\r\n    (0,_exercise2__WEBPACK_IMPORTED_MODULE_2__.loadPageItems)(_exercise2__WEBPACK_IMPORTED_MODULE_2__.personList);\r\n    (0,_exercise3__WEBPACK_IMPORTED_MODULE_3__.generateUserRandomValues)();\r\n});\r\n\n\n//# sourceURL=webpack://sprint-1/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;