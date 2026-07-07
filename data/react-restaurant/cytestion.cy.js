describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Click on element Our Full Menu`, () => {
    cy.clickTextIfExist(`Our Full Menu`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element More About Us`, () => {
    cy.clickTextIfExist(`More About Us`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Menu->Toggle navigation`, () => {
    cy.clickTextIfExist(`Menu`);
    cy.clickCauseExist(`[aria-label="Toggle navigation"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Menu->React Restaurant`, () => {
    cy.clickTextIfExist(`Menu`);
    cy.clickTextIfExist(`React Restaurant`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Menu->Home`, () => {
    cy.clickTextIfExist(`Menu`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->Toggle navigation`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickCauseExist(`[aria-label="Toggle navigation"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->React Restaurant`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickTextIfExist(`React Restaurant`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->Home`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element About->Menu`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickTextIfExist(`Menu`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->Toggle navigation`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickCauseExist(`[aria-label="Toggle navigation"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->React Restaurant`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickTextIfExist(`React Restaurant`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->Home`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->Menu`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickTextIfExist(`Menu`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->About`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickTextIfExist(`About`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact->Submit`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.clickTextIfExist(`Submit`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Contact->first-name-last-name-email-address-phone-number-date-guests-number-comments and submit`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.fillInput(`[id="first-name"] textarea`, `plum`);
    cy.fillInput(`[id="last-name"] textarea`, `Implemented`);
    cy.fillInput(`[id="email-address"] textarea`, `withdrawal`);
    cy.fillInput(`[id="phone-number"] textarea`, `Bahamian Dollar`);
    cy.clickCauseExist('[id="date"]');
    cy.fillInput(`[id="guests-number"] textarea`, `2`);
    cy.fillInput(`[id="comments"] textarea`, `Credit Card Account`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
});
