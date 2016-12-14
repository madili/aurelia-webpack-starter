import { PageObjectApp } from './app.po.js';

describe('Aurelia skeleton App', function() {
    let poApp;

    beforeEach(() => {
        poApp = new PageObjectApp();

        browser.loadAndWaitForAureliaPage('http://localhost:19876');
    });

    it('should be initial message', () => {
        expect(poApp.getMessage()).toBe('Welcome to Aurelia Webpack App!');
    });
});