import { AngularfireProjectPage } from './app.po';

describe('angularfire-project App', () => {
  let page: AngularfireProjectPage;

  beforeEach(() => {
    page = new AngularfireProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
