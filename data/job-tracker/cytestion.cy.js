describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Filling values e.g., Zalando-e.g., Junior Frontend Developer-Applied-Berlin / Remote-https://...-What did you apply with? Who is the contact person? Next steps?-Search company, title, location, notes...-All-newest and submit`, () => {
    cy.fillInput(`[placeholder="e.g., Zalando"] textarea`, `objectoriented`);
    cy.fillInput(`[placeholder="e.g., Junior Frontend Developer"] textarea`, `Guin Francesa`);
    cy.fillInput(`[value="Applied"] input`, `protocol`);
    cy.fillInput(`[placeholder="Berlin / Remote"] textarea`, `explicit`);
    cy.fillInput(`[placeholder="https://..."] textarea`, `Granite`);
    cy.fillInput(`[placeholder="What did you apply with? Who is the contact person? Next steps?"] input`, `Bedfordshire`);
    cy.fillInput(`[placeholder="Search company, title, location, notes..."] textarea`, `valueadded`);
    cy.fillInput(`[value="All"] input`, `Forint`);
    cy.fillInput(`[value="newest"] input`, `Planejador`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
});
