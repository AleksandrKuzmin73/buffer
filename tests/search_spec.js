describe ("buffer test", function(){
    var common = require('../config/common.js'),
        mainForm = new common.mainForm();
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();

    // 1. buffer test;
    it("Google search", function () {
        mainForm.expectSiteClipBoard();
        mainForm.expectSiteGoogle();
    });

});