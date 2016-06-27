export class Ng2FilterPipePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-filter-pipe-app h1')).getText();
  }
}
