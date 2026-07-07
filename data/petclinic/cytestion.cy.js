describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Filling values Find owners->lastName and submit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.fillInput(`[id="lastName"] textarea`, `Buckinghamshire`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Add Owner->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Add Owner`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Add Owner->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Add Owner`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Add Owner->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Add Owner`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Add Owner->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Add Owner`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Find owners->Add Owner->firstName-lastName-address-city-telephone and submit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Add Owner`);
    cy.fillInput(`[id="firstName"] textarea`, `multitasking`);
    cy.fillInput(`[id="lastName"] textarea`, `grey`);
    cy.fillInput(`[id="address"] textarea`, `disintermediate`);
    cy.fillInput(`[id="city"] textarea`, `Robust`);
    cy.fillInput(`[id="telephone"] textarea`, `Designer`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Veterinarians->Next->Previous`, () => {
    cy.clickTextIfExist(`Veterinarians`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="Previous"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Veterinarians->Next->1`, () => {
    cy.clickTextIfExist(`Veterinarians`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`1`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Previous`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="Previous"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->1`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`1`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->George Franklin->Edit Owner`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`George Franklin`);
    cy.clickTextIfExist(`Edit Owner`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->George Franklin->Add New Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`George Franklin`);
    cy.clickTextIfExist(`Add New Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Betty Davis->Edit Owner`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Betty Davis`);
    cy.clickTextIfExist(`Edit Owner`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Betty Davis->Add New Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Betty Davis`);
    cy.clickTextIfExist(`Add New Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Eduardo Rodriquez->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Eduardo Rodriquez`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Eduardo Rodriquez->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Eduardo Rodriquez`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Eduardo Rodriquez->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Eduardo Rodriquez`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Eduardo Rodriquez->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Eduardo Rodriquez`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Eduardo Rodriquez->Edit Owner`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Eduardo Rodriquez`);
    cy.clickTextIfExist(`Edit Owner`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Eduardo Rodriquez->Add New Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Eduardo Rodriquez`);
    cy.clickTextIfExist(`Add New Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Eduardo Rodriquez->Edit Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Eduardo Rodriquez`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Eduardo Rodriquez->Add Visit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Eduardo Rodriquez`);
    cy.clickTextIfExist(`Add Visit`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Harold Davis->Edit Owner`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Harold Davis`);
    cy.clickTextIfExist(`Edit Owner`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Harold Davis->Add New Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Harold Davis`);
    cy.clickTextIfExist(`Add New Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Peter McTavish->Edit Owner`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Peter McTavish`);
    cy.clickTextIfExist(`Edit Owner`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Peter McTavish->Add New Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Peter McTavish`);
    cy.clickTextIfExist(`Add New Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Veterinarians->Next->First->navbar-brand`, () => {
    cy.clickTextIfExist(`Veterinarians`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="First"]`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Veterinarians->Next->First->navbar-toggler`, () => {
    cy.clickTextIfExist(`Veterinarians`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="First"]`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Veterinarians->Next->First->Last`, () => {
    cy.clickTextIfExist(`Veterinarians`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="First"]`);
    cy.clickCauseExist(`[title="Last"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Veterinarians->Next->First->Home`, () => {
    cy.clickTextIfExist(`Veterinarians`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="First"]`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Veterinarians->Next->First->2`, () => {
    cy.clickTextIfExist(`Veterinarians`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="First"]`);
    cy.clickTextIfExist(`2`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->First->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="First"]`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->First->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="First"]`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->First->Last`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="First"]`);
    cy.clickCauseExist(`[title="Last"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->First->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="First"]`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->First->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="First"]`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->First->George Franklin`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="First"]`);
    cy.clickTextIfExist(`George Franklin`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->First->Betty Davis`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="First"]`);
    cy.clickTextIfExist(`Betty Davis`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->First->Eduardo Rodriquez`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="First"]`);
    cy.clickTextIfExist(`Eduardo Rodriquez`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->First->Harold Davis`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="First"]`);
    cy.clickTextIfExist(`Harold Davis`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->First->Peter McTavish`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="First"]`);
    cy.clickTextIfExist(`Peter McTavish`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->First->2`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickCauseExist(`[title="First"]`);
    cy.clickTextIfExist(`2`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jean Coleman->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jean Coleman`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jean Coleman->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jean Coleman`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jean Coleman->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jean Coleman`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jean Coleman->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jean Coleman`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jean Coleman->Edit Owner`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jean Coleman`);
    cy.clickTextIfExist(`Edit Owner`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jean Coleman->Add New Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jean Coleman`);
    cy.clickTextIfExist(`Add New Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jean Coleman->Edit Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jean Coleman`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jean Coleman->Add Visit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jean Coleman`);
    cy.clickTextIfExist(`Add Visit`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jeff Black->Edit Owner`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jeff Black`);
    cy.clickTextIfExist(`Edit Owner`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jeff Black->Add New Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jeff Black`);
    cy.clickTextIfExist(`Add New Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Maria Escobito->Edit Owner`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Maria Escobito`);
    cy.clickTextIfExist(`Edit Owner`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Maria Escobito->Add New Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Maria Escobito`);
    cy.clickTextIfExist(`Add New Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->David Schroeder->Edit Owner`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`David Schroeder`);
    cy.clickTextIfExist(`Edit Owner`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->David Schroeder->Add New Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`David Schroeder`);
    cy.clickTextIfExist(`Add New Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Carlos Estaban->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Carlos Estaban`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Carlos Estaban->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Carlos Estaban`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Carlos Estaban->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Carlos Estaban`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Carlos Estaban->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Carlos Estaban`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Carlos Estaban->Edit Owner`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Carlos Estaban`);
    cy.clickTextIfExist(`Edit Owner`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Carlos Estaban->Add New Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Carlos Estaban`);
    cy.clickTextIfExist(`Add New Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Carlos Estaban->Edit Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Carlos Estaban`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Carlos Estaban->Add Visit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Carlos Estaban`);
    cy.clickTextIfExist(`Add Visit`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->George Franklin->Edit Pet->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`George Franklin`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->George Franklin->Edit Pet->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`George Franklin`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->George Franklin->Edit Pet->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`George Franklin`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->George Franklin->Edit Pet->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`George Franklin`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->George Franklin->Edit Pet->Update Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`George Franklin`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Update Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Find owners->Find Owner->George Franklin->Edit Pet->id-name-birthDate-type and submit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`George Franklin`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.fillInput(`[name="id"] textarea`, `Automated`);
    cy.fillInput(`[id="name"] textarea`, `bypassing`);
    cy.clickCauseExist('[id="birthDate"]');
    cy.fillInputSelect(`[id="type"] input`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->George Franklin->Add Visit->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`George Franklin`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->George Franklin->Add Visit->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`George Franklin`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->George Franklin->Add Visit->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`George Franklin`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->George Franklin->Add Visit->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`George Franklin`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Find owners->Find Owner->George Franklin->Add Visit->date-description-petId and submit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`George Franklin`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist('[id="date"]');
    cy.fillInput(`[id="description"] textarea`, `Toys`);
    cy.fillInput(`[name="petId"] textarea`, `digital`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Betty Davis->Edit Pet->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Betty Davis`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Betty Davis->Edit Pet->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Betty Davis`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Betty Davis->Edit Pet->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Betty Davis`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Betty Davis->Edit Pet->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Betty Davis`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Betty Davis->Edit Pet->Update Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Betty Davis`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Update Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Find owners->Find Owner->Betty Davis->Edit Pet->id-name-birthDate-type and submit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Betty Davis`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.fillInput(`[name="id"] textarea`, `Turkish Lira`);
    cy.fillInput(`[id="name"] textarea`, `Rio de Janeiro`);
    cy.clickCauseExist('[id="birthDate"]');
    cy.fillInputSelect(`[id="type"] input`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Betty Davis->Add Visit->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Betty Davis`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Betty Davis->Add Visit->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Betty Davis`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Betty Davis->Add Visit->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Betty Davis`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Betty Davis->Add Visit->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Betty Davis`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Find owners->Find Owner->Betty Davis->Add Visit->date-description-petId and submit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Betty Davis`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist('[id="date"]');
    cy.fillInput(`[id="description"] textarea`, `Interaes`);
    cy.fillInput(`[name="petId"] textarea`, `sexy`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Harold Davis->Edit Pet->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Harold Davis`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Harold Davis->Edit Pet->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Harold Davis`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Harold Davis->Edit Pet->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Harold Davis`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Harold Davis->Edit Pet->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Harold Davis`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Harold Davis->Edit Pet->Update Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Harold Davis`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Update Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Find owners->Find Owner->Harold Davis->Edit Pet->id-name-birthDate-type and submit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Harold Davis`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.fillInput(`[name="id"] textarea`, `digital`);
    cy.fillInput(`[id="name"] textarea`, `Cotton`);
    cy.clickCauseExist('[id="birthDate"]');
    cy.fillInputSelect(`[id="type"] input`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Harold Davis->Add Visit->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Harold Davis`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Harold Davis->Add Visit->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Harold Davis`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Harold Davis->Add Visit->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Harold Davis`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Harold Davis->Add Visit->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Harold Davis`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Find owners->Find Owner->Harold Davis->Add Visit->date-description-petId and submit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Harold Davis`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist('[id="date"]');
    cy.fillInput(`[id="description"] textarea`, `override`);
    cy.fillInput(`[name="petId"] textarea`, `invoice`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Peter McTavish->Edit Pet->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Peter McTavish`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Peter McTavish->Edit Pet->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Peter McTavish`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Peter McTavish->Edit Pet->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Peter McTavish`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Peter McTavish->Edit Pet->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Peter McTavish`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Peter McTavish->Edit Pet->Update Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Peter McTavish`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Update Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Find owners->Find Owner->Peter McTavish->Edit Pet->id-name-birthDate-type and submit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Peter McTavish`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.fillInput(`[name="id"] textarea`, `copying`);
    cy.fillInput(`[id="name"] textarea`, `withdrawal`);
    cy.clickCauseExist('[id="birthDate"]');
    cy.fillInputSelect(`[id="type"] input`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Peter McTavish->Add Visit->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Peter McTavish`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Peter McTavish->Add Visit->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Peter McTavish`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Peter McTavish->Add Visit->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Peter McTavish`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Peter McTavish->Add Visit->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Peter McTavish`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Find owners->Find Owner->Peter McTavish->Add Visit->date-description-petId and submit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickTextIfExist(`Peter McTavish`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist('[id="date"]');
    cy.fillInput(`[id="description"] textarea`, `aggregate`);
    cy.fillInput(`[name="petId"] textarea`, `firewall`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jeff Black->Edit Pet->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jeff Black`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jeff Black->Edit Pet->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jeff Black`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jeff Black->Edit Pet->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jeff Black`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jeff Black->Edit Pet->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jeff Black`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jeff Black->Edit Pet->Update Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jeff Black`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Update Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Find owners->Find Owner->Next->Jeff Black->Edit Pet->id-name-birthDate-type and submit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jeff Black`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.fillInput(`[name="id"] textarea`, `Avenida`);
    cy.fillInput(`[id="name"] textarea`, `payment`);
    cy.clickCauseExist('[id="birthDate"]');
    cy.fillInputSelect(`[id="type"] input`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jeff Black->Add Visit->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jeff Black`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jeff Black->Add Visit->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jeff Black`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jeff Black->Add Visit->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jeff Black`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Jeff Black->Add Visit->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jeff Black`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Find owners->Find Owner->Next->Jeff Black->Add Visit->date-description-petId and submit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Jeff Black`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist('[id="date"]');
    cy.fillInput(`[id="description"] textarea`, `concept`);
    cy.fillInput(`[name="petId"] textarea`, `Unbranded`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Maria Escobito->Edit Pet->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Maria Escobito`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Maria Escobito->Edit Pet->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Maria Escobito`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Maria Escobito->Edit Pet->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Maria Escobito`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Maria Escobito->Edit Pet->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Maria Escobito`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Maria Escobito->Edit Pet->Update Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Maria Escobito`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Update Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Find owners->Find Owner->Next->Maria Escobito->Edit Pet->id-name-birthDate-type and submit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Maria Escobito`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.fillInput(`[name="id"] textarea`, `primary`);
    cy.fillInput(`[id="name"] textarea`, `Diviso`);
    cy.clickCauseExist('[id="birthDate"]');
    cy.fillInputSelect(`[id="type"] input`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Maria Escobito->Add Visit->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Maria Escobito`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Maria Escobito->Add Visit->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Maria Escobito`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Maria Escobito->Add Visit->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Maria Escobito`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->Maria Escobito->Add Visit->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Maria Escobito`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Find owners->Find Owner->Next->Maria Escobito->Add Visit->date-description-petId and submit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`Maria Escobito`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist('[id="date"]');
    cy.fillInput(`[id="description"] textarea`, `Streamlined`);
    cy.fillInput(`[name="petId"] textarea`, `alarm`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->David Schroeder->Edit Pet->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`David Schroeder`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->David Schroeder->Edit Pet->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`David Schroeder`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->David Schroeder->Edit Pet->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`David Schroeder`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->David Schroeder->Edit Pet->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`David Schroeder`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->David Schroeder->Edit Pet->Update Pet`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`David Schroeder`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.clickTextIfExist(`Update Pet`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Find owners->Find Owner->Next->David Schroeder->Edit Pet->id-name-birthDate-type and submit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`David Schroeder`);
    cy.clickTextIfExist(`Edit Pet`);
    cy.fillInput(`[name="id"] textarea`, `Marginal`);
    cy.fillInput(`[id="name"] textarea`, `Avenida`);
    cy.clickCauseExist('[id="birthDate"]');
    cy.fillInputSelect(`[id="type"] input`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->David Schroeder->Add Visit->navbar-brand`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`David Schroeder`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist(`[class="navbar-brand"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->David Schroeder->Add Visit->navbar-toggler`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`David Schroeder`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist(`[class="navbar-toggler"]`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->David Schroeder->Add Visit->Home`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`David Schroeder`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickTextIfExist(`Home`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Find owners->Find Owner->Next->David Schroeder->Add Visit->Veterinarians`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`David Schroeder`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickTextIfExist(`Veterinarians`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Find owners->Find Owner->Next->David Schroeder->Add Visit->date-description-petId and submit`, () => {
    cy.clickTextIfExist(`Find owners`);
    cy.clickTextIfExist(`Find Owner`);
    cy.clickCauseExist(`[title="Next"]`);
    cy.clickTextIfExist(`David Schroeder`);
    cy.clickTextIfExist(`Add Visit`);
    cy.clickCauseExist('[id="date"]');
    cy.fillInput(`[id="description"] textarea`, `matrix`);
    cy.fillInput(`[name="petId"] textarea`, `indexing`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
});
