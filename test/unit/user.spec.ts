import {User} from 'src/user';
import {HttpClient} from 'aurelia-fetch-client';

class HttpStub {
  user: any;
  
  fetch(url) {
    return new Promise(resolve => {
      resolve({ json: () => this.user });
    });
  }
  
  configure(func) { }
}

function createHttpStub(): any {
  return new HttpStub();
}

describe('the User module', () => {

  it('sets fetch response to user', (done) => {
    var http = createHttpStub(),
        sut = new User(<HttpClient>http),
        userStub = [1],
        userFake = [2];
        
    http.user = userStub;
    
    sut.activate().then(() => {
      expect(sut.user).toBe(userStub);
      expect(sut.user).not.toBe(userFake);
      done();
    });
  });
});
