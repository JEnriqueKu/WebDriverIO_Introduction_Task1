import {BasePage} from "./BasePage.js";
import {PostformLeft, PostformText} from "../component/index.js";

export class HomePage extends BasePage{
    constructor() {
        super("https://pastebin.com/");
        this.postformLeft = new PostformLeft();
        this.postformText = new PostformText();
    }

    open() {
        return super.open();
    }

}