import { elementToXY } from '../support/utils'

Cypress.Commands.add('getBreedsDiv', () =>
  cy.get(Cypress.env('appContainerSelector')).children().eq(1)
)

Cypress.Commands.add('getResultsDiv', () =>
  cy.get(Cypress.env('appContainerSelector')).children().eq(2)
)

Cypress.Commands.add('getTitle', () => cy.get(Cypress.env('titleSelector')))

Cypress.Commands.add('getSearch', () => cy.get(Cypress.env('searchSelector')))

Cypress.Commands.add('getBreedButtons', () =>
  cy.getBreedsDiv().children().filter(Cypress.env('breedButtonFilter'))
)

Cypress.Commands.add('isSorted', { prevSubject: true }, (subject: JQuery) => {
  cy.wrap(subject).then((buttons) => {
    const names = buttons.toArray().map((el) => el.innerText)
    const names_sorted = [...names].sort()
    expect(names.every((v, i) => v === names_sorted[i])).to.be.true
  })
})

Cypress.Commands.add(
  'isInQuadrant',
  { prevSubject: true },
  (subject: JQuery, quadrant: Quadrant) => {
    cy.wrap(subject).then((target) => {
      const targetXY = elementToXY(target[0])
      cy.get('#root').then((root) => {
        const rootXY = elementToXY(root[0])
        expect(targetXY.y).to.be[quadrant.includes('top') ? 'lessThan' : 'greaterThan'](rootXY.y)
        expect(targetXY.x).to.be[quadrant.includes('Left') ? 'lessThan' : 'greaterThan'](rootXY.x)
      })
    })
  }
)

Cypress.Commands.add('isXbyY', { prevSubject: true }, (subject: JQuery, x: number, y: number) => {
  cy.wrap(subject).then((buttons) => {
    const DOMRects = buttons.toArray().map((el) => el.getBoundingClientRect())
    expect(new Set(DOMRects.map((el) => el.x)).size).to.equal(x)
    expect(new Set(DOMRects.map((el) => el.y)).size).to.equal(y)
  })
})
