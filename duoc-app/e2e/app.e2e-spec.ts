import { DuocAppPage } from './app.po';

describe('duoc-app App', () => {
  let page: DuocAppPage;

  beforeEach(() => {
    page = new DuocAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
