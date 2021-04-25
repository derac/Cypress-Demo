type Coordinates = {
  x: number
  y: number
}

export const elementToXY = (el: HTMLElement): Coordinates => {
  const rect = el.getBoundingClientRect()
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  }
}
