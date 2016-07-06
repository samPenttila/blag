import { BlagPage } from './app.po';

describe('blag App', function() {
  let page: BlagPage;

  beforeEach(() => {
    page = new BlagPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('blag works!');
  });
});
