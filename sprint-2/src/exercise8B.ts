import { Person } from "./Types";
import { PersonListHandler, personList } from "./exercise8A";

const creatorOfAda: Array<Person> = personList.filter((person: Person): boolean=> person.isCreatorOfAda);

const outputHandler: PersonListHandler = new PersonListHandler();

outputHandler.createPersonCardsAndAppend(creatorOfAda, 'exercise8B-card-body');