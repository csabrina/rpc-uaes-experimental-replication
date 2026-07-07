describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Filling values sortBySelect-initialSortSelect-filterInput-__BVID__19-__BVID__20-__BVID__21-__BVID__22-perPageSelect and submit`, () => {
    cy.fillInputSelect(`[id="sortBySelect"] input`);
    cy.fillInputSelect(`[id="initialSortSelect"] input`);
    cy.fillInput(`[id="filterInput"] textarea`, `SMTP`);
    cy.fillInput(`[id="__BVID__19"] textarea`, `Tcnico`);
    cy.fillInput(`[id="__BVID__20"] textarea`, `evolve`);
    cy.fillInput(`[id="__BVID__21"] textarea`, `Alameda`);
    cy.fillInput(`[id="__BVID__22"] textarea`, `Alameda`);
    cy.fillInputSelect(`[id="perPageSelect"] input`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element REST API->Home`, () => {
    cy.clickTextIfExist(`REST API`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element REST API->About`, () => {
    cy.clickTextIfExist(`REST API`);
    cy.clickTextIfExist(`About`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element REST API->1`, () => {
    cy.clickTextIfExist(`REST API`);
    cy.clickTextIfExist(`1`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Add New Employee->×`, () => {
    cy.clickTextIfExist(`Add New Employee`);
    cy.clickTextIfExist(`×`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Add New Employee->Save`, () => {
    cy.clickTextIfExist(`Add New Employee`);
    cy.clickTextIfExist(`Save`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Add New Employee->Cancel`, () => {
    cy.clickTextIfExist(`Add New Employee`);
    cy.clickTextIfExist(`Cancel`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Add New Employee->input-1-input-2-input-3-input-4 and submit`, () => {
    cy.clickTextIfExist(`Add New Employee`);
    cy.fillInput(`[id="input-1"] textarea`, `seize`);
    cy.fillInput(`[id="input-2"] textarea`, `Ponte`);
    cy.fillInput(`[id="input-3"] textarea`, `architect`);
    cy.fillInput(`[id="input-4"] textarea`, `Books`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values About->Home->__BVID__51-__BVID__52-__BVID__53-__BVID__54 and submit`, () => {
    cy.clickTextIfExist(`About`);
    cy.clickTextIfExist(`Home`);
    cy.fillInput(`[id="__BVID__51"] textarea`, `programming`);
    cy.fillInput(`[id="__BVID__52"] textarea`, `Internacional`);
    cy.fillInput(`[id="__BVID__53"] textarea`, `Bacon`);
    cy.fillInput(`[id="__BVID__54"] textarea`, `Health`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
});
