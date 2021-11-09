export type Person = {
    readonly id: number;
    name: string;
    bio: string;
};

export interface IPerson {
    personArray: Array<Person>;
    getPersonBioById: (id: number)=> string;
    getPersonNameById: (id: number)=> string;
    removePersonById: (id: number)=> void;
    changePersonAttribute: (id: number, propertyName: string, propertyNewValue: string)=> void;
}
