"use strict";
var welcome_po_1 = require("./welcome.po");
var skeleton_po_1 = require("./skeleton.po");
var protractor_1 = require("aurelia-protractor-plugin/protractor");
describe('iboard skeleton app', function () {
    var welcome_page;
    var page_skeleton;
    beforeEach(function () {
        page_skeleton = new skeleton_po_1.PageSkeleton();
        welcome_page = new welcome_po_1.WelcomePage();
        protractor_1.browser.loadAndWaitForAureliaPage("http://localhost:9000");
    });
    it('should load the page and display the initial page title', function () {
        expect(page_skeleton.getCurrentPageTitle()).toBe('Welcome | WTF!');
    });
    it('should display greeting', function () {
        expect(welcome_page.getGreeting()).toBe('Welcome');
    });
    it('should automatically write down the fullname', function () {
        welcome_page.setFirstname('Frank');
        welcome_page.setLastname('Zappa');
        protractor_1.browser.sleep(200);
        expect(welcome_page.getFullname()).toBe('FRANK ZAPPA');
    });
    it('should show alert message when clicking submit button', function () {
        expect(welcome_page.openAlertDialog()).toBe(true);
    });
    it('should navigate to users page', function () {
        page_skeleton.navigateTo('#/users');
        expect(page_skeleton.getCurrentPageTitle()).toBe('Users | WTF!');
    });
});
