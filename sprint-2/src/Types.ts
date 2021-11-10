export type Person = {
    readonly id: number;
    name: string;
    bio: string;
    isCreatorOfAda: boolean;
};

export enum EnumPersonNames {
    adaLovelace = 'Ada Lovelace',
    jeanIchbiah = 'Jean Ichbiah',
    nicolauCopernico = 'Nicolau Copérnico',
    nikolaTesla = 'Nikola Tesla',
    alanTuring = 'Alan Turing'
}