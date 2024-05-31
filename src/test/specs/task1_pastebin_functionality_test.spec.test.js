import {pages} from "../../po/page/index.js";


describe('PasteBin create a new paste functionality tests from task 1', () => {
    let pastePageUrl;

    before(async ()=>{
        await pages("home").open();
        await pages("home").postformText.writeInTextArea("Hello from WebDrive");
        await pages("home").scrollDown();
        await pages("home").postformLeft.setPasteExpiration("10minutes");
        await pages("home").postformLeft.setPasteNameTitle("helloweb");
        await pages("home").postformLeft.clickCreateNewPaste();
        await pages("pastePage").waitToOpenPage();
        pastePageUrl = await browser.getUrl();
        await console.log(pastePageUrl);
    })

    it('should open PasteBin page', async () => {
        await pages("home").open();
        await expect(browser).toHaveTitle("Pastebin.com - #1 paste tool since 2002!");
    });

    it('should create a new paste with correct content in code', async () => {
        await pages("pastePage",pastePageUrl).open();
        const codeText = await pages("pastePage").codeSection.codeText();

        await expect(codeText).toEqual("Hello from WebDrive");
    });

    it('should set the correct paste expiration time', async () => {
        await pages("pastePage",pastePageUrl).open();
        const syntax = await pages("pastePage").infoBar.expireText();
        await expect(syntax).toEqual("10 MIN")
    });

    it('should have the correct title for the paste', async () => {
        await pages("pastePage",pastePageUrl).open
        const title = await browser.getTitle();
        await expect(title).toEqual("helloweb - Pastebin.com");
    });
});