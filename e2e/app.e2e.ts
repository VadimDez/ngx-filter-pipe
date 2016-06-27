import { Ng2FilterPipePage } from './app.po';

describe('ng2-filter-pipe App', function() {
  let page: Ng2FilterPipePage;

  beforeEach(() => {
    page = new Ng2FilterPipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-filter-pipe works!');
  });
});
