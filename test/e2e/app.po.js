export class PageObjectApp {
    constructor() {}

    getMessage() {
        return element(by.tagName('h2')).getText();
    }
}