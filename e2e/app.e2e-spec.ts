import { EssayPage } from './app.po';

describe('essay App', () => {
  let page: EssayPage;

  beforeEach(() => {
    page = new EssayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
