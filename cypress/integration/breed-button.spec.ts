describe('Clicking breed selection button', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://dog.ceo/api/breeds/list/all').as('all-dogs')
    cy.intercept('GET', 'https://dog.ceo/api/breed/*/images').as('breed-images')
    cy.visit('/')
    cy.wait('@all-dogs')

    cy.getBreedsDiv().children().should('have.length', 16)
    // retry until data has been populated

    cy.getBreedsDiv().children().first().click()
  })

  context('Before response.', () => {
    it('Pending style is applied to button.', () => {
      cy.getBreedsDiv()
        .children()
        .first()
        .invoke('attr', 'class')
        .should('contain', Cypress.env('pendingButtonClassSubString'))
    })

    it('Displays loading indicator in results box.', () => {
      cy.getResultsDiv().contains('Loading...')
    })

    it('Makes a call to https://dog.ceo/api/breed/{breed_name}/images', () => {
      cy.wait('@breed-images')
    })
  })

  context('After response.', () => {
    beforeEach(() => {
      cy.wait('@breed-images')
      cy.get('img').should('have.length.greaterThan', 0) // retry until data has been populated
    })

    it('Active style is applied to button', () => {
      cy.getBreedsDiv()
        .children()
        .first()
        .invoke('attr', 'class')
        .should('contain', Cypress.env('activeButtonClassSubString'))
    })

    it('Loading indicator is removed from results box.', () => {
      cy.getResultsDiv().should('not.contain', 'Loading...')
    })

    it('Loads images into results box.', () => {
      return
    })

    it('Loads more images after clicking pagination button', () => {
      cy.getResultsDiv().children().eq(1).click()

      cy.get('img').should('have.length.greaterThan', 20)
    })
  })
})
