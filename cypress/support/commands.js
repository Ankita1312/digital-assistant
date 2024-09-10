Cypress.Commands.add('enterInvalidDOBAndVerifyError', (day, month, year) => {
    // Enter invalid day
    cy.get('[data-cy="day"]').type(day);

    // Enter invalid month
    cy.get('[data-cy="month"]').type(month);

    // Enter invalid year
    cy.get('[data-cy="year"]').type(year);

    // Verify that the error message is displayed
});

Cypress.Commands.add('clearDateFields', () => {
    cy.get('[data-cy="day"]').clear();
    cy.get('[data-cy="month"]').clear();
    cy.get('[data-cy="year"]').clear();
  });
  