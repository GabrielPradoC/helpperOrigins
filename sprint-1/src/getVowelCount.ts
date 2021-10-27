export default function getVowelCount(string: string): number {
  //Remove todos os caracteres que não forem vogais e retorna o tamanho da string restante
  return string.replace(/[^aeiou]/gi, '').length;
};