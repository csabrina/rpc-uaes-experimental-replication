describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Click on element navbar-brand->fa fa-twitter->navbar-toggle`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="navbar-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->dropdown-toggle`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="dropdown-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->fa fa-facebook`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->fa fa-dribbble`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="fa fa-dribbble"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->fa fa-flickr`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="fa fa-flickr"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->fa fa-github`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="fa fa-github"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->Home`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->About`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`About`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->Right Sidebar`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Right Sidebar`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->Dummy Link1`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Dummy Link1`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->Dummy Link2`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Dummy Link2`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->Dummy Link3`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Dummy Link3`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->read more`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`read more`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->Mathematics and Computer Science`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Mathematics and Computer Science`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->Mathematics and Philosophy`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Mathematics and Philosophy`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->Philosophy and Modern Languages`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Philosophy and Modern Languages`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->History (Ancient and Modern)`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`History (Ancient and Modern)`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->Classical Archaeology and Ancient History`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Classical Archaeology and Ancient History`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->Physics and Philosophy`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Physics and Philosophy`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->fa fa-twitter->WebThemez.com`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`WebThemez.com`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->navbar-toggle`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickCauseExist(`[class="navbar-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->navbar-brand`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->dropdown-toggle`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickCauseExist(`[class="dropdown-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->fa fa-google-plus`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickCauseExist(`[class="fa fa-google-plus"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->fa fa-twitter`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->fa fa-dribbble`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickCauseExist(`[class="fa fa-dribbble"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->fa fa-github`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickCauseExist(`[class="fa fa-github"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->fa fa-flickr`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickCauseExist(`[class="fa fa-flickr"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->Home`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->Courses`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickTextIfExist(`Courses`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->Fees`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickTextIfExist(`Fees`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->Portfolio`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickTextIfExist(`Portfolio`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->Right Sidebar`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickTextIfExist(`Right Sidebar`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->Dummy Link1`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickTextIfExist(`Dummy Link1`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->Dummy Link2`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickTextIfExist(`Dummy Link2`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->Dummy Link3`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickTextIfExist(`Dummy Link3`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->Contact`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickTextIfExist(`Contact`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->Responsive Design`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickTextIfExist(`Responsive Design`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->HTML5, CSS3 and JavaScript`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickTextIfExist(`HTML5, CSS3 and JavaScript`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->Bootstrap`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickTextIfExist(`Bootstrap`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->Clean Template`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickTextIfExist(`Clean Template`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->Premium Quality`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickTextIfExist(`Premium Quality`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->fa fa-facebook->WebThemez.com`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.clickTextIfExist(`WebThemez.com`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->fa fa-twitter->navbar-toggle`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="navbar-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->fa fa-twitter->navbar-brand`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->fa fa-twitter->dropdown-toggle`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="dropdown-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->fa fa-twitter->fa fa-facebook`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->fa fa-twitter->fa fa-dribbble`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="fa fa-dribbble"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->fa fa-twitter->fa fa-flickr`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="fa fa-flickr"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->fa fa-twitter->fa fa-github`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="fa fa-github"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->fa fa-twitter->Home`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->fa fa-twitter->About`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`About`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->fa fa-twitter->Right Sidebar`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Right Sidebar`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->fa fa-twitter->Dummy Link1`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Dummy Link1`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->fa fa-twitter->Dummy Link2`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Dummy Link2`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->fa fa-twitter->Dummy Link3`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Dummy Link3`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->fa fa-twitter->WebThemez.com`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`WebThemez.com`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Fees->fa fa-twitter->navbar-toggle`, () => {
    cy.clickTextIfExist(`Fees`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="navbar-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Fees->fa fa-twitter->navbar-brand`, () => {
    cy.clickTextIfExist(`Fees`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Fees->fa fa-twitter->dropdown-toggle`, () => {
    cy.clickTextIfExist(`Fees`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="dropdown-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Fees->fa fa-twitter->fa fa-facebook`, () => {
    cy.clickTextIfExist(`Fees`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Fees->fa fa-twitter->fa fa-dribbble`, () => {
    cy.clickTextIfExist(`Fees`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="fa fa-dribbble"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Fees->fa fa-twitter->fa fa-flickr`, () => {
    cy.clickTextIfExist(`Fees`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="fa fa-flickr"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Fees->fa fa-twitter->fa fa-github`, () => {
    cy.clickTextIfExist(`Fees`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="fa fa-github"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Fees->fa fa-twitter->Home`, () => {
    cy.clickTextIfExist(`Fees`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Fees->fa fa-twitter->About`, () => {
    cy.clickTextIfExist(`Fees`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`About`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Fees->fa fa-twitter->Courses`, () => {
    cy.clickTextIfExist(`Fees`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Courses`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Fees->fa fa-twitter->Right Sidebar`, () => {
    cy.clickTextIfExist(`Fees`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Right Sidebar`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Fees->fa fa-twitter->Dummy Link1`, () => {
    cy.clickTextIfExist(`Fees`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Dummy Link1`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Fees->fa fa-twitter->Dummy Link2`, () => {
    cy.clickTextIfExist(`Fees`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Dummy Link2`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Fees->fa fa-twitter->Dummy Link3`, () => {
    cy.clickTextIfExist(`Fees`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Dummy Link3`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Fees->fa fa-twitter->Signup`, () => {
    cy.clickTextIfExist(`Fees`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Signup`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Fees->fa fa-twitter->WebThemez.com`, () => {
    cy.clickTextIfExist(`Fees`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`WebThemez.com`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->navbar-toggle`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="navbar-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->navbar-brand`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->dropdown-toggle`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="dropdown-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->fa fa-facebook`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->fa fa-dribbble`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="fa fa-dribbble"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->fa fa-flickr`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="fa fa-flickr"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->fa fa-github`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickCauseExist(`[class="fa fa-github"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->Home`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->About`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`About`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->Courses`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Courses`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->Fees`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Fees`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->Right Sidebar`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Right Sidebar`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->Dummy Link1`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Dummy Link1`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->Dummy Link2`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Dummy Link2`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->Dummy Link3`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Dummy Link3`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->All`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`All`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->Web Design`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Web Design`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->Photography`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Photography`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->Print`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Print`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->Project Title`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Project Title`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Portfolio->fa fa-twitter->WebThemez.com`, () => {
    cy.clickTextIfExist(`Portfolio`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`WebThemez.com`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->fa fa-twitter->Send message->navbar-toggle`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.clickCauseExist(`[class="navbar-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->fa fa-twitter->Send message->navbar-brand`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->fa fa-twitter->Send message->dropdown-toggle`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.clickCauseExist(`[class="dropdown-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->fa fa-twitter->Send message->fa fa-facebook`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.clickCauseExist(`[class="fa fa-facebook"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->fa fa-twitter->Send message->fa fa-dribbble`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.clickCauseExist(`[class="fa fa-dribbble"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->fa fa-twitter->Send message->fa fa-flickr`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.clickCauseExist(`[class="fa fa-flickr"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->fa fa-twitter->Send message->fa fa-github`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.clickCauseExist(`[class="fa fa-github"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->fa fa-twitter->Send message->Home`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->fa fa-twitter->Send message->About`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.clickTextIfExist(`About`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->fa fa-twitter->Send message->Courses`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.clickTextIfExist(`Courses`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->fa fa-twitter->Send message->Fees`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.clickTextIfExist(`Fees`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->fa fa-twitter->Send message->Portfolio`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.clickTextIfExist(`Portfolio`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->fa fa-twitter->Send message->Right Sidebar`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.clickTextIfExist(`Right Sidebar`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->fa fa-twitter->Send message->Dummy Link1`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.clickTextIfExist(`Dummy Link1`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->fa fa-twitter->Send message->Dummy Link2`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.clickTextIfExist(`Dummy Link2`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->fa fa-twitter->Send message->Dummy Link3`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.clickTextIfExist(`Dummy Link3`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->fa fa-twitter->Send message->WebThemez.com`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.clickTextIfExist(`WebThemez.com`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Contact->fa fa-twitter->Send message->Your name-Email address-Phone number-Subject-message and submit`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[class="fa fa-twitter"]`);
    cy.clickTextIfExist(`Send message`);
    cy.fillInput(`[placeholder="Your name"] textarea`, `Incredible`);
    cy.fillInput(`[placeholder="Email address"] textarea`, `Sudanese Pound`);
    cy.fillInput(`[placeholder="Phone number"] textarea`, `deposit`);
    cy.fillInput(`[placeholder="Subject"] textarea`, `Music`);
    cy.fillInput(`[id="message"] input`, `Books`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
});
