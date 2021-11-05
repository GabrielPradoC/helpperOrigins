/**
 * Cria uma classe contendo uma string e um método para retornar o número de vogais nessa string
 */
export default class Phrase {

    private string: string;

    /**
     * 
     * @param string String para ser utilizada no método getVowelCount
     */
    constructor(string: string) {
        this.string = string;
    }

    /**
     * Retorna a quantidade de vogais em uma string
     * @returns String
     */
    public getVowelCount(): string{
        return this.string.replace(/[^aeiou]/gi, '').length.toString();
    }
}