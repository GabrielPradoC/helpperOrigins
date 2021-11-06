/**
 * Cria uma classe para armazenar e manipular uma string
 */
export default class Phrase {

    private string: string;

    /**
     * Inicialização da classe, armazena a string passada
     * @param string 
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