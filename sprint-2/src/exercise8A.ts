import { Person as PersonType} from "./Types";
import { Person as PersonClass } from "./exercise8-classes/Person";
import { PersonFactory } from "./exercise8-classes/PersonFactory";

export let personList: Array<PersonType> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina", isCreatorOfAda: false},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia", isCreatorOfAda: false},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.", isCreatorOfAda: false},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.", isCreatorOfAda: false},
    {"id" : 5, "name": "Jean Ichbiah", "bio": "Jean David Ichbiah was a French computer scientist and the initial chief designer of Ada, a general-purpose, strongly typed programming language with certified validated compilers.", isCreatorOfAda: true}
]

/**
 * Classe responsável por criar e anexar cards relacionados a pessoas ao DOM
 */
export class PersonListHandler{
    /**
     * Mapeia um objeto do tipo pessoa para um card
     * @param person Objeto do tipo pessoa 
     * @returns Card
     */
    private mapPersonToCard(person: PersonType): HTMLDivElement{
        const cardDiv = document.createElement('div') as HTMLDivElement;
        const cardBodyDiv  = document.createElement('div') as HTMLDivElement;
        const cardBodyTextParagraph = document.createElement('p') as HTMLParagraphElement;
        const desiredPerson: PersonClass = PersonFactory.getPerson(person.name);

        cardDiv.className = 'card border-dark mb-3';
        cardBodyDiv.className = 'card-body';
        cardBodyTextParagraph.innerText = desiredPerson.getPersonInfo();
        cardBodyDiv.appendChild(cardBodyTextParagraph);
        cardDiv.appendChild(cardBodyDiv);
        return cardDiv;
    }

    /**
     * Mapeia um array de objetos do tipo pessoa para um array de cards
     * @param personList Array de objetos do tipo pessoa
     * @returns Array de cards
     */
    private mapPersonArrayToDivArray(personList: Array<PersonType>): Array<HTMLDivElement>{
        return personList.map(this.mapPersonToCard);
    }

    /**
     * Anexa os cards do array no elemento raiz
     * @param rootElementId Elemento raiz
     * @param cardElementArray Array contendo os cards
     */
    private appendCardElements(rootElementId: string, cardElementArray: Array<HTMLDivElement>): void{
        const rootElement = document.getElementById(rootElementId);
        rootElement.append(...cardElementArray)
    };

    /**
     * Mapeia um array de objetos do tipo pessoa para cards e os anexa no elemento raiz com o id informado
     * @param personList Array de objetos do tipo pessoa
     * @param rootElementId Id do elemento raiz
     */
    public createPersonCardsAndAppend(personList: Array<PersonType>, rootElementId: string): void{
        const cardArray: Array<HTMLDivElement> = this.mapPersonArrayToDivArray(personList);
        this.appendCardElements(rootElementId, cardArray);
    }
}

const outputHandler: PersonListHandler = new PersonListHandler();

outputHandler.createPersonCardsAndAppend(personList, 'exercise8A-card-body');