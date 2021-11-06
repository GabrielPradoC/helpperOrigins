export type Person = {
    readonly id: number;
    name: string;
    bio: string;
    [key: string]: string|number;
};
