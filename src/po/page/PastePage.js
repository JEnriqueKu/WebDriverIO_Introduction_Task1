import {BasePage} from "./BasePage.js";
import {CodeSection, InfoBar} from "../component/index.js";

export class PastePage extends BasePage{
    constructor(url="") {
        super(url);
        this.codeSection = new CodeSection();
        this.infoBar = new InfoBar();
    }

    async waitToOpenPage() {
        await this.infoBar.rootElement.waitUntil(
            async () => {
                return await $(".content__title").isDisplayed();
            },
            {
                timeout: 5000,
                timeoutMsg: 'Expected page to be opened but it was not'
            }
        );
    }
}