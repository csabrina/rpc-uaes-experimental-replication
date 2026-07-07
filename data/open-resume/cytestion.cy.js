describe('Cytestion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitNetworkFinished();
  });
  it(`Click on element resume parser`, () => {
    cy.clickTextIfExist(`resume parser`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element GitHub repository`, () => {
    cy.clickTextIfExist(`GitHub repository`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Reactive Resume`, () => {
    cy.clickTextIfExist(`Reactive Resume`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element FlowCV`, () => {
    cy.clickTextIfExist(`FlowCV`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Xitang Zhao`, () => {
    cy.clickTextIfExist(`Xitang Zhao`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Zhigang Wen`, () => {
    cy.clickTextIfExist(`Zhigang Wen`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element open an issue`, () => {
    cy.clickTextIfExist(`open an issue`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element giving the project a star`, () => {
    cy.clickTextIfExist(`giving the project a star`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Builder->OpenResume`, () => {
    cy.clickTextIfExist(`Builder`);
    cy.clickTextIfExist(`OpenResume`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Builder->Move down`, () => {
    cy.clickTextIfExist(`Builder`);
    cy.clickTextIfExist(`Move down`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Builder->Hide section`, () => {
    cy.clickTextIfExist(`Builder`);
    cy.clickTextIfExist(`Hide section`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Builder->Move up`, () => {
    cy.clickTextIfExist(`Builder`);
    cy.clickTextIfExist(`Move up`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Builder->Delete job`, () => {
    cy.clickTextIfExist(`Builder`);
    cy.clickTextIfExist(`Delete job`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Builder->Add Job`, () => {
    cy.clickTextIfExist(`Builder`);
    cy.clickTextIfExist(`Add Job`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Builder->Hide bullet points`, () => {
    cy.clickTextIfExist(`Builder`);
    cy.clickTextIfExist(`Hide bullet points`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Builder->Delete school`, () => {
    cy.clickTextIfExist(`Builder`);
    cy.clickTextIfExist(`Delete school`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Builder->Add School`, () => {
    cy.clickTextIfExist(`Builder`);
    cy.clickTextIfExist(`Add School`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Builder->Delete project`, () => {
    cy.clickTextIfExist(`Builder`);
    cy.clickTextIfExist(`Delete project`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Builder->Add Project`, () => {
    cy.clickTextIfExist(`Builder`);
    cy.clickTextIfExist(`Add Project`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Builder->Show section`, () => {
    cy.clickTextIfExist(`Builder`);
    cy.clickTextIfExist(`Show section`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Builder->Download Resume`, () => {
    cy.clickTextIfExist(`Builder`);
    cy.clickTextIfExist(`Download Resume`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Builder->name-summary-email-phone-url-location-WORK EXPERIENCE-company-jobTitle-date-EDUCATION-school-degree-gpa-PROJECT-project-SKILLS-Featured Skill 1-Featured Skill 2-Featured Skill 3-Featured Skill 4-Featured Skill 5-Featured Skill 6-CUSTOM SECTION-themeColor-fontSize-0.54-mt-0.5 h-4 w-4 and submit`, () => {
    cy.clickTextIfExist(`Builder`);
    cy.fillInput(`[name="name"] textarea`, `Sergipe`);
    cy.fillInput(`[name="summary"] input`, `Profound`);
    cy.fillInput(`[name="email"] textarea`, `HDD`);
    cy.fillInput(`[name="phone"] textarea`, `Reengineered`);
    cy.fillInput(`[name="url"] textarea`, `fuchsia`);
    cy.fillInput(`[name="location"] textarea`, `Rede`);
    cy.fillInput(`[value="WORK EXPERIENCE"] textarea`, `Home`);
    cy.fillInput(`[name="company"] textarea`, `Gana`);
    cy.fillInput(`[name="jobTitle"] textarea`, `Automotive`);
    cy.fillInput(`[name="date"] textarea`, `Segurana`);
    cy.fillInput(`[value="EDUCATION"] textarea`, `Administrador`);
    cy.fillInput(`[name="school"] textarea`, `synergize`);
    cy.fillInput(`[name="degree"] textarea`, `pink`);
    cy.fillInput(`[name="gpa"] textarea`, `utilize`);
    cy.fillInput(`[value="PROJECT"] textarea`, `Yemeni Rial`);
    cy.fillInput(`[name="project"] textarea`, `matrix`);
    cy.fillInput(`[value="SKILLS"] textarea`, `Rio Grande do Sul`);
    cy.fillInput(`[placeholder="Featured Skill 1"] textarea`, `index`);
    cy.fillInput(`[placeholder="Featured Skill 2"] textarea`, `SSL`);
    cy.fillInput(`[placeholder="Featured Skill 3"] textarea`, `microchip`);
    cy.fillInput(`[placeholder="Featured Skill 4"] textarea`, `Shoes`);
    cy.fillInput(`[placeholder="Featured Skill 5"] textarea`, `Fantastic`);
    cy.fillInput(`[placeholder="Featured Skill 6"] textarea`, `SDR`);
    cy.fillInput(`[value="CUSTOM SECTION"] textarea`, `Berkshire`);
    cy.fillInput(`[name="themeColor"] textarea`, `Burundi Franc`);
    cy.fillInput(`[name="fontSize"] textarea`, `Rupiah`);
    cy.fillInput(`[value="0.54"] textarea`, `Refined Plastic Gloves`);
    cy.fillInput(`[class="mt-0.5 h-4 w-4"] textarea`, `Avon`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Parser->OpenResume`, () => {
    cy.clickTextIfExist(`Parser`);
    cy.clickTextIfExist(`OpenResume`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Parser->Builder`, () => {
    cy.clickTextIfExist(`Parser`);
    cy.clickTextIfExist(`Builder`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Parser->Link`, () => {
    cy.clickTextIfExist(`Parser`);
    cy.clickTextIfExist(`Link`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Parser->ISO 32000 specification`, () => {
    cy.clickTextIfExist(`Parser`);
    cy.clickTextIfExist(`ISO 32000 specification`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Parser->pdf.js`, () => {
    cy.clickTextIfExist(`Parser`);
    cy.clickTextIfExist(`pdf.js`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element Parser->Xitang`, () => {
    cy.clickTextIfExist(`Parser`);
    cy.clickTextIfExist(`Xitang`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values Parser->sr-only and submit`, () => {
    cy.clickTextIfExist(`Parser`);
    cy.fillInput(`[class="sr-only"] textarea`, `Administrador`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element →->OpenResume`, () => {
    cy.clickTextIfExist(`→`);
    cy.clickTextIfExist(`OpenResume`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element →->Builder`, () => {
    cy.clickTextIfExist(`→`);
    cy.clickTextIfExist(`Builder`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element →->Parser`, () => {
    cy.clickTextIfExist(`→`);
    cy.clickTextIfExist(`Parser`);
    cy.checkErrorsWereDetected();
  });
  it(`Click on element →->Create from scratch`, () => {
    cy.clickTextIfExist(`→`);
    cy.clickTextIfExist(`Create from scratch`);
    cy.checkErrorsWereDetected();
  });
  it(`Filling values →->sr-only and submit`, () => {
    cy.clickTextIfExist(`→`);
    cy.fillInput(`[class="sr-only"] textarea`, `Rupiah`);
    cy.submitIfExist(`.ant-form`);
    cy.checkErrorsWereDetected();
  });
});
