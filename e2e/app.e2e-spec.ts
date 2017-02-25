import { ChitChatPage } from './app.po';

describe('chit-chat App', () => {
  let page: ChitChatPage;

  beforeEach(() => {
    page = new ChitChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
