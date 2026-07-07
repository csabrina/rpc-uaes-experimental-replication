describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Click on element 🎯`, () => {
    cy.clickTextIfExist(`🎯`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element 📊`, () => {
    cy.clickTextIfExist(`📊`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element ➕ Add Habit`, () => {
    cy.clickTextIfExist(`➕ Add Habit`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values name-description and submit`, () => {
    cy.fillInput(`[id="name"] textarea`, `Sergipe`);
    cy.fillInput(`[id="description"] textarea`, `haptic`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element 📅->←`, () => {
    cy.clickTextIfExist(`📅`);
    cy.clickTextIfExist(`←`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element 📅->Today`, () => {
    cy.clickTextIfExist(`📅`);
    cy.clickTextIfExist(`Today`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element 📅->→`, () => {
    cy.clickTextIfExist(`📅`);
    cy.clickTextIfExist(`→`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element 💾->📤 Export Data`, () => {
    cy.clickTextIfExist(`💾`);
    cy.clickTextIfExist(`📤 Export Data`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element 💾->🗑️ Clear All Data`, () => {
    cy.clickTextIfExist(`💾`);
    cy.clickTextIfExist(`🗑️ Clear All Data`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values 💾->hidden and submit`, () => {
    cy.clickTextIfExist(`💾`);
    cy.fillInput(`[class="hidden"] textarea`, `parse`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
});
