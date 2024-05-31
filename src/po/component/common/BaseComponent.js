export class BaseComponent {
    
    constructor(rootSelector) {
        this.rootSelector = rootSelector;
    }

    get rootElement (){
        return $(this.rootSelector);
    }
}