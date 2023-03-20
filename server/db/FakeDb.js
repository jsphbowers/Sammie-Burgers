export class Burger {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.patties = data.patties
    this.cheese = data.cheese
    this.fixings = data.fixings
  }
}

class FakeDb {

  burgers = [
    new Burger({
      id: 1,
      name: 'chungus',
      patties: 4,
      cheese: true,
      fixings: true
    }),
    new Burger({
      id: 2,
      name: 'McMeat',
      patties: 2,
      cheese: false,
      fixings: true
    }),
    new Burger({
      id: 3,
      name: 'A Burger',
      patties: 1,
      cheese: true,
      fixings: true
    }),
    new Burger({
      id: 4,
      name: 'Dude what?',
      patties: 10,
      cheese: true,
      fixings: true
    }),
  ]
}

export const fakeDb = new FakeDb