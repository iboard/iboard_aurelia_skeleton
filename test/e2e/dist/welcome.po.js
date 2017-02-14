"use strict";
var protractor_1 = require("aurelia-protractor-plugin/protractor");
var WelcomePage = (function () {
    function WelcomePage() {
    }
    WelcomePage.prototype.getGreeting = function () {
        return protractor_1.element(protractor_1.by.tagName('h2')).getText();
    };
    WelcomePage.prototype.getSubGreeting = function () {
        return protractor_1.element(protractor_1.by.tagName('h3')).getText();
    };
    WelcomePage.prototype.setFirstname = function (value) {
        var firstName = protractor_1.element(protractor_1.by.valueBind('firstName'));
        return firstName.clear().then(function () { return firstName.sendKeys(value); });
    };
    WelcomePage.prototype.setLastname = function (value) {
        var lastName = protractor_1.element(protractor_1.by.valueBind('lastName'));
        return lastName.clear().then(function () { return lastName.sendKeys(value); });
    };
    WelcomePage.prototype.getFullname = function () {
        return protractor_1.element(protractor_1.by.css('.help-block')).getText();
    };
    WelcomePage.prototype.pressSubmitButton = function () {
        return protractor_1.element(protractor_1.by.css('button[type="submit"]')).click();
    };
    WelcomePage.prototype.openAlertDialog = function () {
        var _this = this;
        return protractor_1.browser.wait(function () {
            _this.pressSubmitButton();
            return protractor_1.browser.switchTo().alert().then(function (alert) { alert.accept(); return true; }, function () { return false; });
        });
    };
    return WelcomePage;
}());
exports.WelcomePage = WelcomePage;
