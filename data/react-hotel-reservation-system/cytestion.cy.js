describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Click on element Hotel &amp; Date`, () => {
    cy.clickTextIfExist(`Hotel &amp; Date`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Room type &amp; View`, () => {
    cy.clickTextIfExist(`Room type &amp; View`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Preview &amp; Payment`, () => {
    cy.clickTextIfExist(`Preview &amp; Payment`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values hotel-hotel-checkin-checkout-adults-children and submit`, () => {
    cy.fillInput(`[id="hotel"] textarea`, `panel`);
    cy.fillInput(`[name="hotel"] textarea`, `vortals`);
    cy.clickCauseExist('[id="checkin"]');
    cy.clickCauseExist('[id="checkout"]');
    cy.fillInput(`[id="adults"] textarea`, `6`);
    cy.fillInput(`[id="children"] textarea`, `7`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
});
