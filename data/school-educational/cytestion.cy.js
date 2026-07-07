describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Click on element navbar-brand->->navbar-toggle`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickCauseExist(`[class="navbar-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->scrollup`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickCauseExist(`[class="scrollup"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->Home`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->Courses`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Courses`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->Read More`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Read More`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->Previous`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Previous`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->Next`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Next`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->Lorem ipsum dolor sit amet, consectetur adipis.`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Lorem ipsum dolor sit amet, consectetur adipis.`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->Apsum dolor sit amet, consectetur adipisdslif.`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Apsum dolor sit amet, consectetur adipisdslif.`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->Dolor sit amet, consectetur adipisic indfeft`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Dolor sit amet, consectetur adipisic indfeft`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->Latest Events`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Latest Events`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->Terms and conditions`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Terms and conditions`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->Privacy policy`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Privacy policy`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->Career`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Career`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->Contact us`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Contact us`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->Lorem ipsum dolor sit amet, consectetur adipiscing...`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Lorem ipsum dolor sit amet, consectetur adipiscing...`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->Pellentesque et pulvinar enim. Quisque at tempor l...`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Pellentesque et pulvinar enim. Quisque at tempor l...`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->Natus sit voluptatem accusantium doloremque`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Natus sit voluptatem accusantium doloremque`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-brand->->WebThemez`, () => {
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`WebThemez`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->navbar-toggle`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickCauseExist(`[class="navbar-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->navbar-brand`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->scrollup`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickCauseExist(`[class="scrollup"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Home`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Courses`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Courses`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Read more`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Read more`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Accordion Heading Text Item # 1`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Accordion Heading Text Item # 1`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Accordion Heading Text Item # 2`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Accordion Heading Text Item # 2`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Accordion Heading Text Item # 3`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Accordion Heading Text Item # 3`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Accordion Heading Text Item # 4`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Accordion Heading Text Item # 4`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Eriure dolor in hendrerit in vulpu`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Eriure dolor in hendrerit in vulpu`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Otate velit esse molestie con`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Otate velit esse molestie con`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Bequat, vel illum dolore eu feugiat`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Bequat, vel illum dolore eu feugiat`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Nulla facilisis at vero eros et`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Nulla facilisis at vero eros et`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Bumsan et iusto odio dignissim`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Bumsan et iusto odio dignissim`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Equi blandit praesent lup`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Equi blandit praesent lup`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Latest Events`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Latest Events`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Terms and conditions`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Terms and conditions`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Privacy policy`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Privacy policy`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Career`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Career`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Contact us`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Contact us`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Lorem ipsum dolor sit amet, consectetur adipiscing...`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Lorem ipsum dolor sit amet, consectetur adipiscing...`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Pellentesque et pulvinar enim. Quisque at tempor l...`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Pellentesque et pulvinar enim. Quisque at tempor l...`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->Natus sit voluptatem accusantium doloremque`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Natus sit voluptatem accusantium doloremque`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About Us->->WebThemez`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`WebThemez`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Services->->navbar-toggle`, () => {
    cy.clickTextIfExist(`Services`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickCauseExist(`[class="navbar-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Services->->navbar-brand`, () => {
    cy.clickTextIfExist(`Services`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Services->->scrollup`, () => {
    cy.clickTextIfExist(`Services`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickCauseExist(`[class="scrollup"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Services->->Home`, () => {
    cy.clickTextIfExist(`Services`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Services->->About Us`, () => {
    cy.clickTextIfExist(`Services`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`About Us`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Services->->Courses`, () => {
    cy.clickTextIfExist(`Services`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Courses`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Services->->Latest Events`, () => {
    cy.clickTextIfExist(`Services`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Latest Events`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Services->->Terms and conditions`, () => {
    cy.clickTextIfExist(`Services`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Terms and conditions`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Services->->Privacy policy`, () => {
    cy.clickTextIfExist(`Services`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Privacy policy`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Services->->Career`, () => {
    cy.clickTextIfExist(`Services`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Career`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Services->->Contact us`, () => {
    cy.clickTextIfExist(`Services`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Contact us`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Services->->Lorem ipsum dolor sit amet, consectetur adipiscing...`, () => {
    cy.clickTextIfExist(`Services`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Lorem ipsum dolor sit amet, consectetur adipiscing...`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Services->->Pellentesque et pulvinar enim. Quisque at tempor l...`, () => {
    cy.clickTextIfExist(`Services`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Pellentesque et pulvinar enim. Quisque at tempor l...`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Services->->Natus sit voluptatem accusantium doloremque`, () => {
    cy.clickTextIfExist(`Services`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Natus sit voluptatem accusantium doloremque`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Services->->WebThemez`, () => {
    cy.clickTextIfExist(`Services`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`WebThemez`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->navbar-toggle`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickCauseExist(`[class="navbar-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->navbar-brand`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickCauseExist(`[title=""]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->scrollup`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickCauseExist(`[class="scrollup"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Home`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->About Us`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`About Us`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Services`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Services`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Pricing`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Pricing`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Contact`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Contact`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->All`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`All`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Web design`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Web design`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Mobile App`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Mobile App`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->UI design`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`UI design`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Course Title`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Course Title`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Learn More`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Learn More`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Terms and conditions`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Terms and conditions`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Privacy policy`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Privacy policy`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Career`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Career`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Contact us`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Contact us`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Lorem ipsum dolor sit amet, consectetur adipiscing...`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Lorem ipsum dolor sit amet, consectetur adipiscing...`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Pellentesque et pulvinar enim. Quisque at tempor l...`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Pellentesque et pulvinar enim. Quisque at tempor l...`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Natus sit voluptatem accusantium doloremque`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Natus sit voluptatem accusantium doloremque`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->WebThemez`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`WebThemez`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Pricing->->navbar-toggle`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickCauseExist(`[class="navbar-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Pricing->->navbar-brand`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Pricing->->scrollup`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickCauseExist(`[class="scrollup"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Pricing->->Home`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Pricing->->About Us`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`About Us`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Pricing->->Services`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Services`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Pricing->->Courses`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Courses`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Pricing->->Get Now`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Get Now`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Pricing->->Latest Events`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Latest Events`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Pricing->->Terms and conditions`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Terms and conditions`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Pricing->->Privacy policy`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Privacy policy`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Pricing->->Career`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Career`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Pricing->->Contact us`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Contact us`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Pricing->->Lorem ipsum dolor sit amet, consectetur adipiscing...`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Lorem ipsum dolor sit amet, consectetur adipiscing...`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Pricing->->Pellentesque et pulvinar enim. Quisque at tempor l...`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Pellentesque et pulvinar enim. Quisque at tempor l...`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Pricing->->Natus sit voluptatem accusantium doloremque`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Natus sit voluptatem accusantium doloremque`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Pricing->->WebThemez`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`WebThemez`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->navbar-toggle`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickCauseExist(`[class="navbar-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->navbar-brand`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->scrollup`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickCauseExist(`[class="scrollup"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->Home`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->About Us`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`About Us`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->Services`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Services`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->Courses`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Courses`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->Pricing`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Pricing`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->×`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`×`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->Latest Events`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Latest Events`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->Terms and conditions`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Terms and conditions`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->Privacy policy`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Privacy policy`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->Career`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Career`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->Contact us`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Contact us`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->Lorem ipsum dolor sit amet, consectetur adipiscing...`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Lorem ipsum dolor sit amet, consectetur adipiscing...`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->Pellentesque et pulvinar enim. Quisque at tempor l...`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Pellentesque et pulvinar enim. Quisque at tempor l...`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->Natus sit voluptatem accusantium doloremque`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Natus sit voluptatem accusantium doloremque`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->->WebThemez`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`WebThemez`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Contact->->name-email-comment-submit and submit`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.fillInput(`[name="name"] textarea`, `solid state`);
    cy.fillInput(`[name="email"] textarea`, `Angola`);
    cy.fillInput(`[name="comment"] input`, `Outdoors`);
    cy.fillInput(`[id="submit"] textarea`, `clearthinking`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Portfolio name->Previous`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickCauseExist(`[title="Portfolio name"]`);
    cy.clickCauseExist(`[title="Previous"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Portfolio name->Next`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickCauseExist(`[title="Portfolio name"]`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Courses->Latest Events->Portfolio name->Close`, () => {
    cy.clickTextIfExist(`Courses`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickCauseExist(`[title="Portfolio name"]`);
    cy.clickCauseExist(`[title="Close"]`);
    cy.checkErrorsWereDetected();
  });
});
