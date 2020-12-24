class Employee {
  constructor(type) {
    this.type = type; // 0->fresher, 1->TL, 2->PM
    this.isAvailable = true;
  }

  receiveCall = (call) => {
    this.isAvailable = false;
  }

  escalateCall = (call) => {
    call.minType = this.type + 1;
    this.isAvailable = false;
  }
}

class Fresher extends Employee {
  constructor() {
    super(0)
  }
}

class TechLead extends Employee {
  constructor() {
    super(1)
  }
}

class ProductManager extends Employee {
  constructor() {
    super(2)
  }
}

class CallCenter {
  constructor(numberOfFreshers) {
    this._pm = new ProductManager();
    this._tl = new TechLead();
    this._freshers = [...Array(numberOfFreshers).keys()].map(() => new Fresher());
  }

  getAvailableFresher = () => {
    return this._freshers.filter(({ isAvailable }) => isAvailable === true)[0];
  }

  getCallHandler = (call) => {
    if (call.minType === 0) {
      // get an available fresher
      return this.getAvailableFresher();
    }

    if (call.minType === 1 && this._tl.isAvailable) {
      return this._tl;
    }

    if (call.minType === 2 && this._pm.isAvailable) {
      return this._pm;
    }
  }
}
