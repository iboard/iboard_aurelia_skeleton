"use strict";
var protractor_1 = require("aurelia-protractor-plugin/protractor");
var PageObject_Welcome = (function () {
    function PageObject_Welcome() {
    }
    PageObject_Welcome.prototype.getGreeting = function () {
        return protractor_1.element(protractor_1.by.tagName('h2')).getText();
    };
    PageObject_Welcome.prototype.setFirstname = function (value) {
        var firstName = protractor_1.element(protractor_1.by.valueBind('firstName'));
        return firstName.clear().then(function () { return firstName.sendKeys(value); });
    };
    PageObject_Welcome.prototype.setLastname = function (value) {
        var lastName = protractor_1.element(protractor_1.by.valueBind('lastName'));
        return lastName.clear().then(function () { return lastName.sendKeys(value); });
    };
    PageObject_Welcome.prototype.getFullname = function () {
        return protractor_1.element(protractor_1.by.css('.help-block')).getText();
    };
    PageObject_Welcome.prototype.pressSubmitButton = function () {
        return protractor_1.element(protractor_1.by.css('button[type="submit"]')).click();
    };
    PageObject_Welcome.prototype.openAlertDialog = function () {
        var _this = this;
        return protractor_1.browser.wait(function () {
            _this.pressSubmitButton();
            return protractor_1.browser.switchTo().alert().then(function (alert) { alert.accept(); return true; }, function () { return false; });
        });
    };
    return PageObject_Welcome;
}());
exports.PageObject_Welcome = PageObject_Welcome;
