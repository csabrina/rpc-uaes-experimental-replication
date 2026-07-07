describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Click on element sc-bBXqnf etqhdE`, () => {
    cy.clickCauseExist(`[class="sc-bBXqnf etqhdE"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Delete`, () => {
    cy.clickTextIfExist(`Delete`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Add`, () => {
    cy.clickTextIfExist(`Add`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Generate PDF`, () => {
    cy.clickTextIfExist(`Generate PDF`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Load Example`, () => {
    cy.clickTextIfExist(`Load Example`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Reset`, () => {
    cy.clickTextIfExist(`Reset`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values firstName-lastName-title-photo-address-phoneNumber-email-description-position-company-city-from-to-universityName-degree-subject and submit`, () => {
    cy.fillInput(`[name="firstName"] textarea`, `deposit`);
    cy.fillInput(`[name="lastName"] textarea`, `Berkshire`);
    cy.fillInput(`[name="title"] textarea`, `circuit`);
    cy.fillInput(`[name="photo"] textarea`, `Associado`);
    cy.fillInput(`[name="address"] textarea`, `transmitting`);
    cy.fillInput(`[name="phoneNumber"] textarea`, `intranet`);
    cy.fillInput(`[name="email"] textarea`, `motivating`);
    cy.fillInput(`[name="description"] input`, `Handcrafted`);
    cy.fillInput(`[name="position"] textarea`, `Engenheiro`);
    cy.fillInput(`[name="company"] textarea`, `Pula`);
    cy.fillInput(`[name="city"] textarea`, `port`);
    cy.fillInput(`[name="from"] textarea`, `Engenheiro`);
    cy.fillInput(`[name="to"] textarea`, `Bulgarian Lev`);
    cy.fillInput(`[name="universityName"] textarea`, `Savings Account`);
    cy.fillInput(`[name="degree"] textarea`, `Pernambuco`);
    cy.fillInput(`[name="subject"] textarea`, `Engenheiro`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
});
