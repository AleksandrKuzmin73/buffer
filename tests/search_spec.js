describe ("Google test", function(){
    var common = require('../config/common.js'),
        mainForm = new common.mainForm();
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();

    // 1. Авторизация;
    it("Google search", function () {
        mainForm.siteClipBoardClick();
        mainForm.expectSiteClipBoard();
        mainForm.siteGoogle();
        mainForm.expectGoole();
    });

});