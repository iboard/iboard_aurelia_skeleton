import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@autoinject
export class User {
  public heading = 'User';
  public user = [];

  constructor(private http: HttpClient) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });
  }

  public activate() {
    return this.http.fetch('users/iboard')
      .then(response => response.json())
      .then(user => this.user = user as any);
  }

}
