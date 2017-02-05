import {Router, RouterConfiguration} from 'aurelia-router';

export class ChildRouter {
  public heading = 'Router';
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: ['', 'welcome'], name: 'welcome',       moduleId: 'welcome',       nav: true, title: 'Welcome' },
      { route: 'user',         name: 'user',         moduleId: 'user',         nav: true, title: 'User' },
      { route: 'child-router',  name: 'child-router',  moduleId: 'child-router',  nav: true, title: 'Router' }
    ]);

    this.router = router;
  }
}
