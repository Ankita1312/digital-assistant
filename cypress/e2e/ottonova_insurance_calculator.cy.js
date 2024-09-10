describe("Ottonova Insurance Calculator", () => {
  before(() => {
    cy.visit("https://www.ottonova.de/online-beitragsrechner");
    //Accept the cookie banner by clicking on "Alles Akzeptieren", if it shows.
    cy.get("body").then(($body) => {
      if ($body.find('button:contains("Alles Akzeptieren")').length > 0) {
        cy.contains("Alles Akzeptieren").click();
      }
    });
  });

  it("Complete Insurance Application Process", () => {
    // Step 1: Select "Angestellt" and enter income
    cy.contains("Angestellt").click();
    cy.get('[data-cy="income-input"]').type("70000");
    cy.get('[data-cy="employment-status-continue"]')
      .should("not.be.disabled")
      .click();

    // Step 2: Select insurance and start date
    cy.get('[data-cy="full-insurance"]').click();
    cy.get('[data-cy="ingress-date"]').select("01.10.2024");
    cy.get('[data-cy="insurance-product-continue"]')
      .should("not.be.disabled")
      .click();

    // Step 3: Enter invalid DOB and verify error message
    cy.fixture("testData").then((data) => {
      cy.enterInvalidDOBAndVerifyError(
        data.invalidDOB.day,
        data.invalidDOB.month,
        data.invalidDOB.year
      );

      // Verify the error message
      cy.get('[data-cy="invalid-age-validation-message"]').should("be.visible");
      cy.get('[data-cy="birthday-continue"]').should("be.disabled");

      // Step 4: Clear the date fields and enter valid DOB
      cy.clearDateFields();
      cy.get('[data-cy="day"]').type(data.validDOB.day);
      cy.get('[data-cy="month"]').type(data.validDOB.month);
      cy.get('[data-cy="year"]').type(data.validDOB.year);

      // Verify no error message and proceed
      cy.get('[data-cy="invalid-age-validation-message"]').should("not.exist");
      cy.get('[data-cy="birthday-continue"]').should("be.enabled").click();

      // This will Verify navigation to the next page
      cy.url().should("include", "/versicherungsstatus");
    });
  });
});
