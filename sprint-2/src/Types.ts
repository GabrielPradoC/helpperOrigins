export interface INumberArray{
    numberArray: Array<number>;
    getMinAverageMaxValues: ()=> Array<number>;
    generateRandom: (numberOfElements: number)=> void;
};

export type Person = {
    readonly id: number;
    name: string;
    bio: string;
    isCreatorOfAda?: boolean;
};

export enum EnumPersonNames {
    adaLovelace = 'Ada Lovelace',
    jeanIchbiah = 'Jean Ichbiah',
    nicolauCopernico = 'Nicolau Copérnico',
    nikolaTesla = 'Nikola Tesla',
    alanTuring = 'Alan Turing'
}

export interface IPerson {
    personArray: Array<Person>;
    getPersonBioById: (id: number)=> string;
    getPersonNameById: (id: number)=> string;
    removePersonById: (id: number)=> void;
    changePersonAttribute: (id: number, propertyName: string, propertyNewValue: string)=> void;
};