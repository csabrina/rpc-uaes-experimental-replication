describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Click on element All`, () => {
    cy.clickTextIfExist(`All`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Active`, () => {
    cy.clickTextIfExist(`Active`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Completed`, () => {
    cy.clickTextIfExist(`Completed`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Clear completed`, () => {
    cy.clickTextIfExist(`Clear completed`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element TodoMVC`, () => {
    cy.clickTextIfExist(`TodoMVC`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values What needs to be done?-toggle-all and submit`, () => {
    cy.fillInput(`[placeholder="What needs to be done?"] textarea`, `Gourde US Dollar`);
    cy.fillInput(`[id="toggle-all"] textarea`, `Sports`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
});
