import './exercise1A';
import './exercise1B';
import './exercise2';
import './exercise3';
import './exercise4';
import { loadPageItems, personList } from './exercise2';
import { generateUserRandomValues } from './exercise3';

window.addEventListener('load', ():void=>{
    loadPageItems(personList);
    generateUserRandomValues();
});