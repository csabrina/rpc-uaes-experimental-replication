describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('loginUrl'));
    cy.get('#username, #email').first().type(Cypress.env('userLogin'));
    cy.get('#password').type(Cypress.env('userPassword'));

    cy.get('#btn-login, [data-test="signin-submit"], button[type="submit"]').should('not.be.disabled').click();

    cy.visit('/');
    cy.waitNetworkFinished();
  });

  it(`Filling values email-password-remember and submit`, () => {
    cy.fillInput(`[id="email"] textarea`, `Legado`);
    cy.fillInput(`[id="password"] textarea`, `payment`);
    cy.fillInput(`[id="remember"] textarea`, `Wooden`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Forgot password?->refine Project`, () => {
    cy.clickTextIfExist(`Forgot password?`);
    cy.clickTextIfExist(`refine Project`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Forgot password?->Sign in`, () => {
    cy.clickTextIfExist(`Forgot password?`);
    cy.clickTextIfExist(`Sign in`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Forgot password?->Send reset instructions`, () => {
    cy.clickTextIfExist(`Forgot password?`);
    cy.clickTextIfExist(`Send reset instructions`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Forgot password?->email and submit`, () => {
    cy.clickTextIfExist(`Forgot password?`);
    cy.fillInput(`[id="email"] textarea`, `Mtricas`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign up->refine Project`, () => {
    cy.clickTextIfExist(`Sign up`);
    cy.clickTextIfExist(`refine Project`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign up->Sign in`, () => {
    cy.clickTextIfExist(`Sign up`);
    cy.clickTextIfExist(`Sign in`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Sign up->email-password and submit`, () => {
    cy.clickTextIfExist(`Sign up`);
    cy.fillInput(`[id="email"] textarea`, `actionitems`);
    cy.fillInput(`[id="password"] textarea`, `crossplatform`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Tasks->Add new card->ant-btn css-dev-only-do-not-override-dkbvqv ant-btn-circle ant-btn-default ant-btn-icon-only`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Tasks`);
    cy.clickTextIfExist(`Add new card`);
    cy.clickCauseExist(`[class="ant-btn css-dev-only-do-not-override-dkbvqv ant-btn-circle ant-btn-default ant-btn-icon-only"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Tasks->Add new card->Refine`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Tasks`);
    cy.clickTextIfExist(`Add new card`);
    cy.clickTextIfExist(`Refine`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Tasks->Add new card->Dashboard`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Tasks`);
    cy.clickTextIfExist(`Add new card`);
    cy.clickTextIfExist(`Dashboard`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Tasks->Add new card->Companies`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Tasks`);
    cy.clickTextIfExist(`Add new card`);
    cy.clickTextIfExist(`Companies`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Tasks->Add new card->×`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Tasks`);
    cy.clickTextIfExist(`Add new card`);
    cy.clickTextIfExist(`×`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Tasks->Add new card->Delete card`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Tasks`);
    cy.clickTextIfExist(`Add new card`);
    cy.clickTextIfExist(`Delete card`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Sign in->Tasks->Add new card->completed and submit`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Tasks`);
    cy.clickTextIfExist(`Add new card`);
    cy.fillInput(`[id="completed"] textarea`, `Cliente`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->2->ant-pagination-item-link->`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`2`);
    cy.clickCauseExist(`[class="ant-pagination-item-link"]`);
    cy.clickCauseExist(`[title=""]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->2->ant-pagination-item-link->Refine`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`2`);
    cy.clickCauseExist(`[class="ant-pagination-item-link"]`);
    cy.clickTextIfExist(`Refine`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->2->ant-pagination-item-link->Dashboard`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`2`);
    cy.clickCauseExist(`[class="ant-pagination-item-link"]`);
    cy.clickTextIfExist(`Dashboard`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->2->ant-pagination-item-link->Tasks`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`2`);
    cy.clickCauseExist(`[class="ant-pagination-item-link"]`);
    cy.clickTextIfExist(`Tasks`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->2->ant-pagination-item-link->Create`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`2`);
    cy.clickCauseExist(`[class="ant-pagination-item-link"]`);
    cy.clickTextIfExist(`Create`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->2->ant-pagination-item-link->1`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`2`);
    cy.clickCauseExist(`[class="ant-pagination-item-link"]`);
    cy.clickTextIfExist(`1`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->2->ant-pagination-item-link->3`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`2`);
    cy.clickCauseExist(`[class="ant-pagination-item-link"]`);
    cy.clickTextIfExist(`3`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->3->->Cancel`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`3`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Cancel`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->3->->Save`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`3`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`Save`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Sign in->Companies->3->->name-salesOwnerId and submit`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`3`);
    cy.clickCauseExist(`[title=""]`);
    cy.fillInput(`[id="name"] textarea`, `virtual`);
    cy.fillInput(`[id="salesOwnerId"] textarea`, `morph`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Tasks->Add new card->ant-btn css-dev-only-do-not-override-dkbvqv ant-btn-text->ant-space css-dev-only-do-not-override-dkbvqv ant-space-horizontal ant-space-align-center ant-space-gap-row-small ant-space-gap-col-small`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Tasks`);
    cy.clickTextIfExist(`Add new card`);
    cy.clickCauseExist(`[class="ant-btn css-dev-only-do-not-override-dkbvqv ant-btn-text"]`);
    cy.clickCauseExist(`[class="ant-space css-dev-only-do-not-override-dkbvqv ant-space-horizontal ant-space-align-center ant-space-gap-row-small ant-space-gap-col-small"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Tasks->Add new card->ant-btn css-dev-only-do-not-override-r0kb5i ant-btn-circle ant-btn-text ant-btn-icon-only ant-dropdown-trigger->ant-btn css-dev-only-do-not-override-r0kb5i ant-btn-circle ant-btn-text ant-btn-icon-only ant-dropdown-trigger ant-dropdown-open`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Tasks`);
    cy.clickTextIfExist(`Add new card`);
    cy.clickCauseExist(`[class="ant-btn css-dev-only-do-not-override-r0kb5i ant-btn-circle ant-btn-text ant-btn-icon-only ant-dropdown-trigger"]`);
    cy.clickCauseExist(`[class="ant-btn css-dev-only-do-not-override-r0kb5i ant-btn-circle ant-btn-text ant-btn-icon-only ant-dropdown-trigger ant-dropdown-open"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->2->ant-pagination-item-link->ant-btn css-dev-only-do-not-override-dkbvqv ant-btn-text->ant-space css-dev-only-do-not-override-dkbvqv ant-space-horizontal ant-space-align-center ant-space-gap-row-small ant-space-gap-col-small`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`2`);
    cy.clickCauseExist(`[class="ant-pagination-item-link"]`);
    cy.clickCauseExist(`[class="ant-btn css-dev-only-do-not-override-dkbvqv ant-btn-text"]`);
    cy.clickCauseExist(`[class="ant-space css-dev-only-do-not-override-dkbvqv ant-space-horizontal ant-space-align-center ant-space-gap-row-small ant-space-gap-col-small"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->3->->×->ant-pagination-item-link`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`3`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`×`);
    cy.clickCauseExist(`[class="ant-pagination-item-link"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->3->->×->Refine`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`3`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`×`);
    cy.clickTextIfExist(`Refine`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->3->->×->Dashboard`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`3`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`×`);
    cy.clickTextIfExist(`Dashboard`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->3->->×->Tasks`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`3`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`×`);
    cy.clickTextIfExist(`Tasks`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->3->->×->Create`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`3`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`×`);
    cy.clickTextIfExist(`Create`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->3->->×->1`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`3`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`×`);
    cy.clickTextIfExist(`1`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->3->->×->2`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`3`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`×`);
    cy.clickTextIfExist(`2`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Sign in->Companies->3->->×->ant-btn css-dev-only-do-not-override-dkbvqv ant-btn-text->ant-space css-dev-only-do-not-override-dkbvqv ant-space-horizontal ant-space-align-center ant-space-gap-row-small ant-space-gap-col-small`, () => {
    cy.clickTextIfExist(`Sign in`);
    cy.clickTextIfExist(`Companies`);
    cy.clickTextIfExist(`3`);
    cy.clickCauseExist(`[title=""]`);
    cy.clickTextIfExist(`×`);
    cy.clickCauseExist(`[class="ant-btn css-dev-only-do-not-override-dkbvqv ant-btn-text"]`);
    cy.clickCauseExist(`[class="ant-space css-dev-only-do-not-override-dkbvqv ant-space-horizontal ant-space-align-center ant-space-gap-row-small ant-space-gap-col-small"]`);
    cy.checkErrorsWereDetected();
  });
});
