export class BlagPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('blag-app h1')).getText();
  }
}
