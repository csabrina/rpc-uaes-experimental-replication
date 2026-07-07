describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Click on element mdc-button mat-mdc-button-base auto-focus-absorb mat-mdc-button mat-unthemed`, () => {
    cy.clickCauseExist(`[class="mdc-button mat-mdc-button-base auto-focus-absorb mat-mdc-button mat-unthemed"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element But me wait!`, () => {
    cy.clickTextIfExist(`But me wait!`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element menu`, () => {
    cy.clickTextIfExist(`menu`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element OWASP Juice Shop`, () => {
    cy.clickTextIfExist(`OWASP Juice Shop`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element search`, () => {
    cy.clickTextIfExist(`search`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element close`, () => {
    cy.clickTextIfExist(`close`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Account`, () => {
    cy.clickTextIfExist(`Account`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element 0`, () => {
    cy.clickTextIfExist(`0`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element EN`, () => {
    cy.clickTextIfExist(`EN`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Add to Basket`, () => {
    cy.clickTextIfExist(`Add to Basket`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Force page reload`, () => {
    cy.clickTextIfExist(`Force page reload`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Open Worldwide Application Security Project (OWASP...`, () => {
    cy.clickTextIfExist(`Open Worldwide Application Security Project (OWASP...`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element https://owasp-juice.shop`, () => {
    cy.clickTextIfExist(`https://owasp-juice.shop`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Dismiss`, () => {
    cy.clickTextIfExist(`Dismiss`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values  and submit`, () => {
    cy.fillInput(`[placeholder=""] textarea`, `Gorgeous Concrete Mouse`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Help getting started->×`, () => {
    cy.clickTextIfExist(`Help getting started`);
    cy.clickTextIfExist(`×`);
    cy.checkErrorsWereDetected();
  });
});
