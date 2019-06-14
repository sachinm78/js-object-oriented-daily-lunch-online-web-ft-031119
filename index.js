// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] }

const Neighborhood = (() => {
  let neighborhoodIds = 1;
  return class {
    constructor(name) {
      this.id = neighborhoodIds++;
      this.name = name;
      store.neighborhoods.push(this);
    }
    
  }
