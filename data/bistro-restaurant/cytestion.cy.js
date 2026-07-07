describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Click on element Home->->navbar-toggle`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickCauseExist(`[class="navbar-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->->navbar-brand`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->->scrollup`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickCauseExist(`[class="scrollup"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->->Gallery`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Gallery`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->->Previous`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Previous`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->->Next`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Next`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->->Lorem ipsum dolor sit amet, consectetur adipis.`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Lorem ipsum dolor sit amet, consectetur adipis.`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->->Apsum dolor sit amet, consectetur adipisdslif.`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Apsum dolor sit amet, consectetur adipisdslif.`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->->Dolor sit amet, consectetur adipisic indfeft`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Dolor sit amet, consectetur adipisic indfeft`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->->Latest Events`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Latest Events`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->->Terms and conditions`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Terms and conditions`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->->Privacy policy`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Privacy policy`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->->Career`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Career`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->->Contact us`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Contact us`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->->Lorem ipsum dolor sit amet, consectetur adipiscing...`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Lorem ipsum dolor sit amet, consectetur adipiscing...`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->->Pellentesque et pulvinar enim. Quisque at tempor l...`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Pellentesque et pulvinar enim. Quisque at tempor l...`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->->Natus sit voluptatem accusantium doloremque`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Natus sit voluptatem accusantium doloremque`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->->WebThemez`, () => {
    cy.clickTextIfExist(`Home`);
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
  it(`Click on element About Us->->Gallery`, () => {
    cy.clickTextIfExist(`About Us`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Gallery`);
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
  it(`Click on element Services->->Gallery`, () => {
    cy.clickTextIfExist(`Services`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Gallery`);
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
  it(`Click on element Gallery->Latest Events->navbar-toggle`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickCauseExist(`[class="navbar-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->navbar-brand`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickCauseExist(`[title=""]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->scrollup`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickCauseExist(`[class="scrollup"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->Home`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->About Us`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`About Us`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->Services`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Services`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->Pricing`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Pricing`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->Contact`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Contact`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->All`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`All`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->Continental`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Continental`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->Asian Food`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Asian Food`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->Italian Food`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Italian Food`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->Terms and conditions`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Terms and conditions`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->Privacy policy`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Privacy policy`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->Career`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Career`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->Contact us`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Contact us`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->Lorem ipsum dolor sit amet, consectetur adipiscing...`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Lorem ipsum dolor sit amet, consectetur adipiscing...`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->Pellentesque et pulvinar enim. Quisque at tempor l...`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Pellentesque et pulvinar enim. Quisque at tempor l...`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->Natus sit voluptatem accusantium doloremque`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickTextIfExist(`Natus sit voluptatem accusantium doloremque`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->WebThemez`, () => {
    cy.clickTextIfExist(`Gallery`);
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
  it(`Click on element Pricing->->Gallery`, () => {
    cy.clickTextIfExist(`Pricing`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Gallery`);
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
  it(`Click on element Contact->->Gallery`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Gallery`);
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
    cy.fillInput(`[name="name"] textarea`, `Rede`);
    cy.fillInput(`[name="email"] textarea`, `opensource`);
    cy.fillInput(`[name="comment"] input`, `Gold`);
    cy.fillInput(`[id="submit"] textarea`, `quantify`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->Portfolio name->Previous`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickCauseExist(`[title="Portfolio name"]`);
    cy.clickCauseExist(`[title="Previous"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->Portfolio name->Next`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickCauseExist(`[title="Portfolio name"]`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Gallery->Latest Events->Portfolio name->Close`, () => {
    cy.clickTextIfExist(`Gallery`);
    cy.clickTextIfExist(`Latest Events`);
    cy.clickCauseExist(`[title="Portfolio name"]`);
    cy.clickCauseExist(`[title="Close"]`);
    cy.checkErrorsWereDetected();
  });
});
