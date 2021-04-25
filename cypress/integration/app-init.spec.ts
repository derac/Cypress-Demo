describe('App initialization', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://dog.ceo/api/breeds/list/all').as('all-dogs')
    cy.visit('/')
  })

  context('Title', () => {
    it('Has the text "Dogs!".', () => {
      cy.getTitle()
        .should('be.visible')
        .contains(/^Dogs\!$/)
    })

    it('Is in the top left.', () => {
      cy.getTitle().then((el) => el.contents().first().wrap('<span id="dogtitle"></span>'))

      cy.get('#dogtitle').isInQuadrant('topLeft')
    })
  })

  context('Search', () => {
    it('Is empty.', () => {
      cy.getSearch().should('be.empty')
    })

    it('Is in the top right.', () => {
      cy.getSearch().should('be.visible').isInQuadrant('topRight')
    })

    it('Has placeholder text "Search".', () => {
      cy.getSearch().should('have.attr', 'placeholder', 'search')
    })
  })

  context('Breed selection box', () => {
    it('Displays a loading indicator', () => {
      cy.getBreedsDiv().contains(/^Loading Breeds\.\.\.$/)
    })

    it('A call is made to https://dog.ceo/api/breeds/list/all', () => {
      cy.wait('@all-dogs')
    })

    it('On response, displays 12 buttons in alphabetical order.', () => {
      cy.wait('@all-dogs')

      cy.getBreedButtons().should('have.length', 12).isSorted()
    })

    it('Buttons are in 3 rows of 4s.', () => {
      cy.wait('@all-dogs')

      cy.getBreedButtons().should('have.length', 12).isXbyY(4, 3)
    })
  })

  context('Results box', () => {
    it('Displays an initial message', () => {
      cy.getResultsDiv().contains(/^Click on a breed to see some images\.$/)
    })
  })
})
