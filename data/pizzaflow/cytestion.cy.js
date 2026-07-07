describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Click on element Toggle menu`, () => {
    cy.clickCauseExist(`[aria-label="Toggle menu"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element GitHub Profile`, () => {
    cy.clickCauseExist(`[title="GitHub Profile"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element LinkedIn Profile`, () => {
    cy.clickCauseExist(`[title="LinkedIn Profile"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element PizzaFlow`, () => {
    cy.clickTextIfExist(`PizzaFlow`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home`, () => {
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Menu`, () => {
    cy.clickTextIfExist(`Menu`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Cart`, () => {
    cy.clickTextIfExist(`Cart`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Order Now`, () => {
    cy.clickTextIfExist(`Order Now`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element +251 703 922 596`, () => {
    cy.clickTextIfExist(`+251 703 922 596`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Zekarias Tamiru`, () => {
    cy.clickTextIfExist(`Zekarias Tamiru`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Search order #-Enter your full name and submit`, () => {
    cy.fillInput(`[placeholder="Search order #"] textarea`, `Bedfordshire`);
    cy.fillInput(`[placeholder="Enter your full name"] textarea`, `dynamic`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
});
