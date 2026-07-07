describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('loginUrl'));
    cy.get('#username').type(Cypress.env('userLogin'));
    cy.get('#password').type(Cypress.env('userPassword'));

    cy.get('#btn-login, [data-test="signin-submit"]').should('not.be.disabled').click();

    cy.visit('/');
    cy.waitNetworkFinished();
  });

  it(`Click on element MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover css-11iau0r-MuiTypography-root-MuiLink-root->MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover Mui-focusVisible css-11iau0r-MuiTypography-root-MuiLink-root`, () => {
    cy.clickCauseExist(`[class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover css-11iau0r-MuiTypography-root-MuiLink-root"]`);
    cy.clickCauseExist(`[class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover Mui-focusVisible css-11iau0r-MuiTypography-root-MuiLink-root"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root->MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover css-11iau0r-MuiTypography-root-MuiLink-root`, () => {
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.clickCauseExist(`[class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover css-11iau0r-MuiTypography-root-MuiLink-root"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit Mui-focusVisible MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root`, () => {
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit Mui-focusVisible MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.checkErrorsWereDetected();
  });
  it(`Click on element MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root->paint0_linear_1375_10683`, () => {
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.clickCauseExist(`[id="paint0_linear_1375_10683"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root->Home`, () => {
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root->Notifications`, () => {
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.clickTextIfExist(`Notifications`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root->user-list-search-input and submit`, () => {
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.fillInput(`[id="user-list-search-input"] textarea`, `Azerbaijanian Manat`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element MuiButtonBase-root MuiTab-root MuiTab-textColorInherit Mui-selected css-u7g6hc-MuiButtonBase-root-MuiTab-root->MuiButtonBase-root Mui-focusVisible MuiTab-root MuiTab-textColorInherit Mui-selected css-u7g6hc-MuiButtonBase-root-MuiTab-root`, () => {
    cy.clickCauseExist(`[class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit Mui-selected css-u7g6hc-MuiButtonBase-root-MuiTab-root"]`);
    cy.clickCauseExist(`[class="MuiButtonBase-root Mui-focusVisible MuiTab-root MuiTab-textColorInherit Mui-selected css-u7g6hc-MuiButtonBase-root-MuiTab-root"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root->MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover css-11iau0r-MuiTypography-root-MuiLink-root`, () => {
    cy.clickCauseExist(`[class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root"]`);
    cy.clickCauseExist(`[class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover css-11iau0r-MuiTypography-root-MuiLink-root"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root`, () => {
    cy.clickCauseExist(`[class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root"]`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.checkErrorsWereDetected();
  });
  it(`Click on element MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root->MuiButtonBase-root Mui-focusVisible MuiTab-root MuiTab-textColorInherit Mui-selected css-u7g6hc-MuiButtonBase-root-MuiTab-root`, () => {
    cy.clickCauseExist(`[class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root"]`);
    cy.clickCauseExist(`[class="MuiButtonBase-root Mui-focusVisible MuiTab-root MuiTab-textColorInherit Mui-selected css-u7g6hc-MuiButtonBase-root-MuiTab-root"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root->paint0_linear_1375_10683`, () => {
    cy.clickCauseExist(`[class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root"]`);
    cy.clickCauseExist(`[id="paint0_linear_1375_10683"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root->8`, () => {
    cy.clickCauseExist(`[class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root"]`);
    cy.clickTextIfExist(`8`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root->Home`, () => {
    cy.clickCauseExist(`[class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root"]`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root->My Account`, () => {
    cy.clickCauseExist(`[class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root"]`);
    cy.clickTextIfExist(`My Account`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root->Bank Accounts`, () => {
    cy.clickCauseExist(`[class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root"]`);
    cy.clickTextIfExist(`Bank Accounts`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root->Notifications`, () => {
    cy.clickCauseExist(`[class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root"]`);
    cy.clickTextIfExist(`Notifications`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element 8->open drawer`, () => {
    cy.clickTextIfExist(`8`);
    cy.clickCauseExist(`[aria-label="open drawer"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element 8->MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover css-11iau0r-MuiTypography-root-MuiLink-root`, () => {
    cy.clickTextIfExist(`8`);
    cy.clickCauseExist(`[class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover css-11iau0r-MuiTypography-root-MuiLink-root"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element 8->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root`, () => {
    cy.clickTextIfExist(`8`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.checkErrorsWereDetected();
  });
  it(`Click on element 8->MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary css-mjek79-MuiButtonBase-root-MuiButton-root`, () => {
    cy.clickTextIfExist(`8`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary css-mjek79-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.checkErrorsWereDetected();
  });
  it(`Click on element 8->paint0_linear_1375_10683`, () => {
    cy.clickTextIfExist(`8`);
    cy.clickCauseExist(`[id="paint0_linear_1375_10683"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element 8->Home`, () => {
    cy.clickTextIfExist(`8`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element 8->Notifications`, () => {
    cy.clickTextIfExist(`8`);
    cy.clickTextIfExist(`Notifications`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Home->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-5rbkn2-MuiButtonBase-root-MuiButton-root`, () => {
    cy.clickTextIfExist(`Home`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-5rbkn2-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.checkErrorsWereDetected();
  });
  it(`Click on element My Account->open drawer`, () => {
    cy.clickTextIfExist(`My Account`);
    cy.clickCauseExist(`[aria-label="open drawer"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element My Account->MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover css-11iau0r-MuiTypography-root-MuiLink-root`, () => {
    cy.clickTextIfExist(`My Account`);
    cy.clickCauseExist(`[class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover css-11iau0r-MuiTypography-root-MuiLink-root"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element My Account->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root`, () => {
    cy.clickTextIfExist(`My Account`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.checkErrorsWereDetected();
  });
  it(`Click on element My Account->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-fullWidth css-nqoyp-MuiButtonBase-root-MuiButton-root`, () => {
    cy.clickTextIfExist(`My Account`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-fullWidth css-nqoyp-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.checkErrorsWereDetected();
  });
  it(`Click on element My Account->paint0_linear_1375_10683`, () => {
    cy.clickTextIfExist(`My Account`);
    cy.clickCauseExist(`[id="paint0_linear_1375_10683"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element My Account->8`, () => {
    cy.clickTextIfExist(`My Account`);
    cy.clickTextIfExist(`8`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element My Account->Home`, () => {
    cy.clickTextIfExist(`My Account`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element My Account->Notifications`, () => {
    cy.clickTextIfExist(`My Account`);
    cy.clickTextIfExist(`Notifications`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values My Account->user-settings-firstName-input-user-settings-lastName-input-user-settings-email-input-user-settings-phoneNumber-input and submit`, () => {
    cy.clickTextIfExist(`My Account`);
    cy.fillInput(`[id="user-settings-firstName-input"] textarea`, `Wooden`);
    cy.fillInput(`[id="user-settings-lastName-input"] textarea`, `Yen`);
    cy.fillInput(`[id="user-settings-email-input"] textarea`, `backing up`);
    cy.fillInput(`[id="user-settings-phoneNumber-input"] textarea`, `technologies`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Bank Accounts->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorSecondary MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorSecondary css-1rmbb32-MuiButtonBase-root-MuiButton-root`, () => {
    cy.clickTextIfExist(`Bank Accounts`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorSecondary MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorSecondary css-1rmbb32-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.checkErrorsWereDetected();
  });
  it(`Click on element MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root->open drawer->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root`, () => {
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.clickCauseExist(`[aria-label="open drawer"]`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.checkErrorsWereDetected();
  });
  it(`Click on element MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root->open drawer->MuiButtonBase-root MuiTab-root MuiTab-textColorInherit Mui-selected css-u7g6hc-MuiButtonBase-root-MuiTab-root`, () => {
    cy.clickCauseExist(`[class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit css-u7g6hc-MuiButtonBase-root-MuiTab-root"]`);
    cy.clickCauseExist(`[aria-label="open drawer"]`);
    cy.clickCauseExist(`[class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit Mui-selected css-u7g6hc-MuiButtonBase-root-MuiTab-root"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Bank Accounts->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root->open drawer`, () => {
    cy.clickTextIfExist(`Bank Accounts`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.clickCauseExist(`[aria-label="open drawer"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Bank Accounts->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root->MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover css-11iau0r-MuiTypography-root-MuiLink-root`, () => {
    cy.clickTextIfExist(`Bank Accounts`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.clickCauseExist(`[class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover css-11iau0r-MuiTypography-root-MuiLink-root"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Bank Accounts->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root`, () => {
    cy.clickTextIfExist(`Bank Accounts`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorInherit NavBar-newTransactionButton css-1xjobie-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Bank Accounts->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-fullWidth BankAccountForm-submit css-q6gao2-MuiButtonBase-root-MuiButton-root`, () => {
    cy.clickTextIfExist(`Bank Accounts`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-fullWidth BankAccountForm-submit css-q6gao2-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Bank Accounts->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root->paint0_linear_1375_10683`, () => {
    cy.clickTextIfExist(`Bank Accounts`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.clickCauseExist(`[id="paint0_linear_1375_10683"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Bank Accounts->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root->8`, () => {
    cy.clickTextIfExist(`Bank Accounts`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.clickTextIfExist(`8`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Bank Accounts->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root->Home`, () => {
    cy.clickTextIfExist(`Bank Accounts`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Bank Accounts->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root->My Account`, () => {
    cy.clickTextIfExist(`Bank Accounts`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.clickTextIfExist(`My Account`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Bank Accounts->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root->Notifications`, () => {
    cy.clickTextIfExist(`Bank Accounts`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.clickTextIfExist(`Notifications`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Bank Accounts->MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root->bankaccount-bankName-input-bankaccount-routingNumber-input-bankaccount-accountNumber-input and submit`, () => {
    cy.clickTextIfExist(`Bank Accounts`);
    cy.clickCauseExist(
      `[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-clau34-MuiButtonBase-root-MuiButton-root"]`
    );
    cy.fillInput(`[id="bankaccount-bankName-input"] textarea`, `leading edge`);
    cy.fillInput(`[id="bankaccount-routingNumber-input"] textarea`, `ivory`);
    cy.fillInput(`[id="bankaccount-accountNumber-input"] textarea`, `Tcnico`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
});
