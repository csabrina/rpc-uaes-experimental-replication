describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Click on element View source on Github`, () => {
    cy.clickCauseExist(`[aria-label="View source on Github"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element follow me on Linkedin.`, () => {
    cy.clickTextIfExist(`follow me on Linkedin.`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Star`, () => {
    cy.clickTextIfExist(`Star`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element 0`, () => {
    cy.clickTextIfExist(`0`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values XS-S-M-ML-L-XL-XXL and submit`, () => {
    cy.fillInput(`[value="XS"] textarea`, `Chefe`);
    cy.fillInput(`[value="S"] textarea`, `JSON`);
    cy.fillInput(`[value="M"] textarea`, `Automotive`);
    cy.fillInput(`[value="ML"] textarea`, `azure`);
    cy.fillInput(`[value="L"] textarea`, `internet solution`);
    cy.fillInput(`[value="XL"] textarea`, `Iraque`);
    cy.fillInput(`[value="XXL"] textarea`, `Garden`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Add to cart->remove product from cart`, () => {
    cy.clickTextIfExist(`Add to cart`);
    cy.clickCauseExist(`[title="remove product from cart"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Add to cart->Checkout`, () => {
    cy.clickTextIfExist(`Add to cart`);
    cy.clickTextIfExist(`Checkout`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Add to cart->X->1`, () => {
    cy.clickTextIfExist(`Add to cart`);
    cy.clickTextIfExist(`X`);
    cy.clickTextIfExist(`1`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Add to cart->+->-`, () => {
    cy.clickTextIfExist(`Add to cart`);
    cy.clickTextIfExist(`+`);
    cy.clickTextIfExist(`-`);
    cy.checkErrorsWereDetected();
  });
});
