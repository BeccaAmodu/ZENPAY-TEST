describe('Zenith Bank Website Test', () => {
  it('should validate features, requirements, and available channels of Individual Current Account', () => {
    // Visit the Zenith Bank website
    cy.visit('https://www.zenithbank.com/')

    // Select "Personal" from the left top menu
    cy.get('.menu-main-menu-container')
      .contains('Personal')
      .click()

    // Select "Bank Accounts"
    cy.get('.dropdown-menu')
      .contains('Bank Accounts')
      .click()

    // Select "Current Accounts"
    cy.get('.dropdown-menu')
      .contains('Current Accounts')
      .click()

    // Validate features of Individual Current Account
    cy.contains('Individual Current Account').click()
    // Add your feature validation code here

    // Validate requirements of Individual Current Account
    cy.contains('Requirements').click()
    // Add your requirements validation code here

    // Validate available channels of Individual Current Account
    cy.contains('Available Channels').click()
    // Add your available channels validation code here
  })
})
