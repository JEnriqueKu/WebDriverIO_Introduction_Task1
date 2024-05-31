import {BaseComponent} from "../common/BaseComponent.js";

export class CodeSection extends BaseComponent{
    constructor() {
        super(".highlighted-code");
    }

    get code(){
        return this.rootElement.$$(".li1");
    }

    get syntax(){
        return this.rootElement.$(".left > a:first-child");
    }

    async codeText(){
        const listElements = await this.code;
        let text = "";
        for (const textElement of listElements) {
            const textLine = await textElement.getText();
            text += (textLine.trim() +'\n');
        }
        return text.trim();
    }

    syntaxText(){
        return this.syntax.getText();
    }

}