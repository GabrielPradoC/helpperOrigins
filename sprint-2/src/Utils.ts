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

    /**
     * Anexa os elementos do array no elemento pai informado
     * @param elementsArray Array de elementos html
     * @param rootElement Elemento pai
     */
    public static appendElements(elementsArray: Array<HTMLElement>, rootElement: HTMLElement): void{
        const documentFragment: DocumentFragment = document.createDocumentFragment();
        documentFragment.append(...elementsArray);
        rootElement.appendChild(documentFragment);
    }
}