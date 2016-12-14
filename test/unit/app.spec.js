import { App } from '../../src/app';

describe('the App module', () => {
    var sut;

    beforeEach(() => {
        sut = new App();
    });

    it('show message', () => {
        expect(sut.message).toEqual('Welcome to Aurelia Webpack App!');
    });
});