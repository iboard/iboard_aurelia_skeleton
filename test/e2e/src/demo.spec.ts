import {WelcomePage} from './welcome.po';
import {PageSkeleton} from './skeleton.po';
import {browser, element, by, By, $, $$, ExpectedConditions} from 'aurelia-protractor-plugin/protractor';

describe('iboard skeleton app', function() {
  let welcome_page: WelcomePage;
  let page_skeleton: PageSkeleton;

  beforeEach( () => {
    page_skeleton = new PageSkeleton();
    welcome_page = new WelcomePage();

    browser.loadAndWaitForAureliaPage("http://localhost:9000");
  });

  it('should load the page and display the initial page title', () => {
    expect(page_skeleton.getCurrentPageTitle()).toBe('Welcome | WTF!');
  });

  it('should display greeting', () => {
    expect(welcome_page.getGreeting()).toBe('Welcome');
    expect(welcome_page.getSubGreeting()).toBe('Please tell us who is weighed down with sorrow');
  });

  it('should automatically write down the fullname', () => {
    welcome_page.setFirstname('Frank');
    welcome_page.setLastname('Zappa');

    browser.sleep(50); // should be fixed in the testing framework but isn't yet.
    expect(welcome_page.getFullname()).toBe('FRANK ZAPPA');
  });

  it('should show alert message when clicking submit button', () => {
    expect(welcome_page.openAlertDialog()).toBe(true);
  });

  it('should navigate to user page', () => {
    page_skeleton.navigateTo('#/user');
    expect(page_skeleton.getCurrentPageTitle()).toBe('User | WTF!');
  });
});
