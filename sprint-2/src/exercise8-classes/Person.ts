/**
 * Classe base para objetos do tipo pessoa
 */
export class Person{
    protected name: string;
    protected bio: string;

    /**
     * Retorna uma string contendo o nome e a bio da pessoa desejada
     * @returns String
     */
    public getPersonInfo(): string{
        return `Nome: ${this.name}\nBio: ${this.bio}`
    }
}