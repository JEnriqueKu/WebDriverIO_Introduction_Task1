import {BaseComponent} from "../common/BaseComponent.js";

export class InfoBar extends BaseComponent{
    constructor() {
        super(".info-bar");
    }

    get infoTop(){
        return this.rootElement.$(".info-top h1");
    }

    get expire(){
        return this.rootElement.$(".expire")
    }

    infoTopText(){
        return this.infoTop.getText();
    }

    expireText(){
        return this.expire.getText();
    }


}