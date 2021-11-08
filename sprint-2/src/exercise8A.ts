import { PersonFactory } from "./exercise8-classes/PersonFactory";

const output = document.getElementById('exercise8-output') as HTMLParagraphElement;
const a = PersonFactory.getPerson('Jean Ichbiah').getPersonInfo();

for(let key in a){
    console.log(a[key])
}
