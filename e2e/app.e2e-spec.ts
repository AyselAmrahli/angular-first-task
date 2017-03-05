import { AngularAcceleratePage } from './app.po';

describe('angular-accelerate App', function() {
  let page: AngularAcceleratePage;

  beforeEach(() => {
    page = new AngularAcceleratePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
