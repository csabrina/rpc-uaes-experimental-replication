describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Click on element mobile-nav active`, () => {
    cy.clickCauseExist(`[class="mobile-nav active"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element active`, () => {
    cy.clickCauseExist(`[class="active"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element navbar-toggle`, () => {
    cy.clickCauseExist(`[class="navbar-toggle"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home`, () => {
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Rooms`, () => {
    cy.clickTextIfExist(`Rooms`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Restaurant`, () => {
    cy.clickTextIfExist(`Restaurant`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Weddings`, () => {
    cy.clickTextIfExist(`Weddings`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Membership`, () => {
    cy.clickTextIfExist(`Membership`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Contact`, () => {
    cy.clickTextIfExist(`Contact`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Modify`, () => {
    cy.clickTextIfExist(`Modify`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Enjoy`, () => {
    cy.clickTextIfExist(`Enjoy`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Continue`, () => {
    cy.clickTextIfExist(`Continue`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Terms &amp; Conditions`, () => {
    cy.clickTextIfExist(`Terms &amp; Conditions`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Privacy Policy`, () => {
    cy.clickTextIfExist(`Privacy Policy`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Partners`, () => {
    cy.clickTextIfExist(`Partners`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element reservations@loscocosbungalows.com`, () => {
    cy.clickTextIfExist(`reservations@loscocosbungalows.com`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Tlf: +34 987 675 432`, () => {
    cy.clickTextIfExist(`Tlf: +34 987 675 432`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values 29/06/2026-30/06/2026-adults-children-rooms and submit`, () => {
    cy.fillInput(`[value="29/06/2026"] textarea`, `Santa Catarina`);
    cy.fillInput(`[value="30/06/2026"] textarea`, `supplychains`);
    cy.fillInputSelect(`[name="adults"] input`);
    cy.fillInputSelect(`[name="children"] input`);
    cy.fillInputSelect(`[name="rooms"] input`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
});
