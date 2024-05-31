export class BasePage {
    
    constructor(url) {
        this.url = url;
    }

    open() {
        browser.url(this.url);
        browser.maximizeWindow();
    }

    scrollDown(){
        return  browser.execute(() => {
            window.scrollBy(0,700)});
    }

    changeTab(){

    }
}