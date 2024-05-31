import {BaseComponent} from "../common/BaseComponent.js";


export class PostformLeft extends BaseComponent{
    constructor() {
        super(".post-form__left");
    }

    get syntaxHighlighting(){
        return this.rootElement.$("#select2-postform-format-container");
    }

    get pasteExpiration(){
        return this.rootElement.$("#select2-postform-expiration-container");
    }

    get pasteName(){
        return this.rootElement.$("#postform-name");
    }

    get createNewPasteButton(){
        return $("button.btn.-big")
    }

    /**
     *
     * @param language {'bash' | 'c' | 'csharp' | 'cpp' | 'css' | 'html4strict' | 'json' | 'java' | 'javascript' | 'lua' | 'markdown' | 'objc' | 'php' | 'perl' | 'python' | 'ruby' | 'swift'}
     * @returns {Promise<void>}
     */
    async setSyntaxHighlighting(language){
        const items = {
            'bash': '8',
            'c': '9',
            'csharp': '14',
            'cpp': '13',
            'css': '16',
            'html4strict': '25',
            'json': '255',
            'java': '27',
            'javascript': '28',
            'lua': '30',
            'markdown': '267',
            'objc': '35',
            'php': '41',
            'perl': '40',
            'python': '42',
            'ruby': '45',
            'swift': '256'
        };
        await this.syntaxHighlighting.click();
        const option = await $(`li[aria-label*='POPULAR'] li[id*='-${items[language.toLowerCase()]}']`);
        await option.waitForDisplayed();
        await option.click();
    }

    /**
     *
     * @param time {'10minutes' | 'never' | 'burnAfterRead' | '1hour' | '1day' | '1week' | '2weeks' | '1month' | '6months' | '1year'}
     * @returns {Promise<void>}
     */
    async setPasteExpiration (time){
        const items = {
            '10minutes': '10M',
            'never': 'N',
            'burnAfterRead': 'B',
            '1hour': '1H',
            '1day': '1D',
            '1week': '1W',
            '2weeks': '2W',
            '1month': '1M',
            '6months': '6M',
            '1year': '1Y'
        }
        await this.pasteExpiration.click();
        const option = await $(`li[id$="-${items[time.toLowerCase()]}"]`);
        await option.waitForDisplayed();
        await option.click();
    }

    setPasteNameTitle(text){
        return this.pasteName.setValue(text);
    }

    clickCreateNewPaste(){
        return this.createNewPasteButton.click();
    }
}
