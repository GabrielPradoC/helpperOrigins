/**
 * Clase para armazenar funções úteis em métodos estáticos
 */
export class Utils{
    /**
     * Remove todos os elementos filhos do elemento raiz informado
     * @param element Elemento raiz
     */
    public static clearElementChildren(element:HTMLElement): void{
        while(element.children[0]){
            const firstChild = element.children[0] as HTMLElement;
            firstChild.remove();
        };
    }
}