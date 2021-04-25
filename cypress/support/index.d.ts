/// <reference types="cypress" />

type Quadrant = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select the breed buttons div.
     * @example cy.getBreedsDiv()
     */
    getBreedsDiv(): Chainable<JQuery>

    /**
     * Custom command to select the results div.
     * @example cy.getResultsDiv()
     */
    getResultsDiv(): Chainable<JQuery>

    /**
     * Custom command to select and return the title div.
     * @example cy.getTitle()
     */
    getTitle(): Chainable<JQuery>

    /**
     * Custom command to select and return the search box.
     * @example cy.getSearch()
     */
    getSearch(): Chainable<JQuery>

    /**
     * Custom command to select and return the breed button elements.
     * @example cy.getBreedButtons()
     */
    getBreedButtons(): Chainable<JQuery>

    /**
     * Asserts that the elements passed to it are sorted.
     * @example cy.getBreedButtons().isSorted()
     */
    isSorted(): void

    /**
     * Asserts that the element passed to it is in the specified quadrant.
     * @example cy.get("#target-element").isInQuadrant("topLeft")
     */
    isInQuadrant(quadrant: Quadrant): void

    /**
     * Asserts that the elements passed to it are in an X by Y grid.
     * @example cy.getBreedButtons().isXbyY(4,3)
     */
    isXbyY(x: number, y: number): void
  }
}
