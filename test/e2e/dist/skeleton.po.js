"use strict";
var protractor_1 = require("aurelia-protractor-plugin/protractor");
var PageSkeleton = (function () {
    function PageSkeleton() {
    }
    PageSkeleton.prototype.getCurrentPageTitle = function () {
        return protractor_1.browser.getTitle();
    };
    PageSkeleton.prototype.navigateTo = function (href) {
        protractor_1.element(protractor_1.by.css('a[href="' + href + '"]')).click();
        return protractor_1.browser.waitForRouterComplete();
    };
    return PageSkeleton;
}());
exports.PageSkeleton = PageSkeleton;
