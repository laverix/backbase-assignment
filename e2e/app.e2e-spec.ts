import { BackbaseAssignmentPage } from './app.po';

describe('backbase-assignment App', () => {
  let page: BackbaseAssignmentPage;

  beforeEach(() => {
    page = new BackbaseAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
