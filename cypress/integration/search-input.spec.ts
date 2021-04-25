describe('Search filtering', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://dog.ceo/api/breeds/list/all').as('all-dogs')
    cy.visit('/')
    cy.wait('@all-dogs')
  })

  it('Displays 12 breeds when search is empty (alphabetical order).', () => {
    cy.getBreedButtons().should('have.length', 12).isSorted()
  })

  it('Displays 4 breeds when "as" is typed in (alphabetical order).', () => {
    cy.getSearch().type('as')

    cy.getBreedButtons().should('have.length', 4).isSorted()
  })

  it('Displays a message reading "No breed matches found." if none are found.', () => {
    cy.getSearch().type('zzz')

    cy.get(Cypress.env('breedMessageDivSelector')).contains('No breed matches found.')
  })
})
