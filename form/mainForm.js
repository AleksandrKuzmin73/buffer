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


    this.expectSiteClipBoard = function () {
        browser.get(url);
        bufferButton.click().then(function () {
            var bufferValue = ncp.paste();
            since("Содержимое буфера и строки не соответствует в форме clipboard").
            expect(inputBoofer.getAttribute('value')).toBe(bufferValue);
        });
    };

    this.expectSiteGoogle = function () {
        browser.get(url2);
        searchForm.click().then(function(){
            ncp.copy('Custom text123');
            var bufferValue2 = ncp.paste();
            browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('v').perform();
            since("Содержимое буфера и строки не соответствует в форме Гугл").
            expect(searchForm.getAttribute('value')).toBe(bufferValue2);
            browser.actions().keyUp(protractor.Key.CONTROL).perform();
        });
    };



};
module.exports = mainForm;