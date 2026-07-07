describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Click on element close`, () => {
    cy.clickCauseExist(`[class="close"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Feedback UI`, () => {
    cy.clickTextIfExist(`Feedback UI`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values num1-num2-num3-num4-num5-num6-num7-num8-num9-num10-Write a review and submit`, () => {
    cy.fillInput(`[id="num1"] textarea`, `Garantia`);
    cy.fillInput(`[id="num2"] textarea`, `opensource`);
    cy.fillInput(`[id="num3"] textarea`, `backend`);
    cy.fillInput(`[id="num4"] textarea`, `timeframe`);
    cy.fillInput(`[id="num5"] textarea`, `eservices`);
    cy.fillInput(`[id="num6"] textarea`, `Salad`);
    cy.fillInput(`[id="num7"] textarea`, `Wallis and Futuna`);
    cy.fillInput(`[id="num8"] textarea`, `reboot`);
    cy.fillInput(`[id="num9"] textarea`, `Rodovia`);
    cy.fillInput(`[id="num10"] textarea`, `Frozen`);
    cy.fillInput(`[placeholder="Write a review"] textarea`, `Marketing`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element edit->Send`, () => {
    cy.clickCauseExist(`[class="edit"]`);
    cy.clickTextIfExist(`Send`);
    cy.checkErrorsWereDetected();
  });
});
