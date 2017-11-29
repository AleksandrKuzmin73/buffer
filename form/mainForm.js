/**
 * Created by Aleksandr Kuzmin on 09.11.2017.
 */
var mainForm = function() {
    var common = ('../config/common.js'),
        bufferButton = element (by.xpath('//div[@id="example-target"]//img[@class="clippy"]')),
        inputBoofer = element (by.xpath('//input[@id="foo"]')),
        searchForm = element (by.id('lst-ib')),
        url = 'https://clipboardjs.com/',
        url2 = 'https://www.google.ru';
        ncp = require("copy-paste");

    this.siteClipBoardClick = function () {
        browser.get(url);
        bufferButton.click();
    };

    this.expectSiteClipBoard = function () {
        var bufferValue = ncp.paste();
        since("Содержимое буфера и строки не соответствует в форме clipboard").
        expect(inputBoofer.getAttribute('value')).toBe(bufferValue);
    };


    this.siteGoogle = function () {
        browser.get(url2);
        searchForm.click();
        ncp.copy('Custom text123');
    };


    this.expectGoole = function () {
        var bufferValue2 = ncp.paste();
        browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('v').perform();
        since("Содержимое буфера и строки не соответствует в форме Гугл").
        expect(searchForm.getAttribute('value')).toBe(bufferValue2);
        browser.sleep('4000');
    };





};
module.exports = mainForm;