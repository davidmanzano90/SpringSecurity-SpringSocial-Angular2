import { SecurityPage } from './app.po';

describe('security App', function() {
  let page: SecurityPage;

  beforeEach(() => {
    page = new SecurityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
