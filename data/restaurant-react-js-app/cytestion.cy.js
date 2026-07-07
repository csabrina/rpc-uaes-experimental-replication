describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Click on element active`, () => {
    cy.clickCauseExist(`[class="active"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element mode-btn`, () => {
    cy.clickCauseExist(`[class="mode-btn"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element mode-btn mobile-icon`, () => {
    cy.clickCauseExist(`[class="mode-btn mobile-icon"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element home`, () => {
    cy.clickTextIfExist(`home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element menu`, () => {
    cy.clickTextIfExist(`menu`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element mobile`, () => {
    cy.clickTextIfExist(`mobile`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element contact us`, () => {
    cy.clickTextIfExist(`contact us`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign In`, () => {
    cy.clickTextIfExist(`Sign In`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element View Menu`, () => {
    cy.clickTextIfExist(`View Menu`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element ↑`, () => {
    cy.clickTextIfExist(`↑`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element X`, () => {
    cy.clickTextIfExist(`X`);
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
  it(`Click on element Download App`, () => {
    cy.clickTextIfExist(`Download App`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Cotact Us`, () => {
    cy.clickTextIfExist(`Cotact Us`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values search you fav meals and submit`, () => {
    cy.fillInput(`[placeholder="search you fav meals"] textarea`, `Cotton`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
});
