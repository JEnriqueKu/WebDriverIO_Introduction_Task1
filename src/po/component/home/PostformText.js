import {BaseComponent} from "../common/BaseComponent.js";


export class PostformText extends BaseComponent{
    constructor() {
        super("#postform-text");
    }

    get textArea(){
        return this.rootElement
    }

    writeInTextArea(text){
        return this.textArea.setValue(text);
    }
}