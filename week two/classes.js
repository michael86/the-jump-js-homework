class Validate extends String {
    static isString(val) {
        return typeof val === 'string'
    }
}

class Motorbike {
    #make;
    #model;
    #bhp;

    constructor(make, model, bhp) {
        this.#make = make;
        this.#model = model;
        this.#bhp = bhp;
    }

    getMake() {
        return this.#make;
    }

    getModel() {
        return this.#model;
    }

    getBhp() {
        return this.#bhp;
    }
}

class Combustion extends Motorbike {
    #litresHeld;
    #isDiesel;

    constructor(make, model, bhp, litresHeld, isDiesel) {
        super(make, model, bhp);
        this.#litresHeld = litresHeld
        this.#isDiesel = isDiesel;
    };

    getLitres() {
        return this.#litresHeld;
    }

    isDiesel() {
        return this.#isDiesel;
    }
}

class Electric extends Motorbike {
    #batteryCapacity
    #timeToCharge;

    constructor(make, model, bhp, batteryCapacity, timeToCharge) {
        super(make, model, bhp);
        this.#batteryCapacity = batteryCapacity;
        this.#timeToCharge = timeToCharge;
    };

    getBatteryCapacity() {
        return this.#batteryCapacity;
    }

    getChargeTime() {
        return this.#timeToCharge;
    }
}

class Retro extends Combustion {
    #isRetro;
    constructor(make, model, bhp, litresHeld, isDiesel, year) {
        super(make, model, bhp, litresHeld, isDiesel)
        this.#isRetro = year <= 1930;
    }

    isRetro() {
        return this.#isRetro;
    }
}

class solarCharged extends Electric {
    #isSolar;

    constructor(make, model, bhp, batteryCapacity, timeToCharge, supportsSolar) {
        super(make, model, bhp, batteryCapacity, timeToCharge)
        this.#isSolar = supportsSolar;
    }

    isSolarPowered() {
        return this.#isSolar
    }
}

const combustionVehicle = {
    make: 'Yamaha',
    model: 'YZF-R',
    bhp: 13,
    litresHeld: 11.0,
    isDiesel: false,
    year: 1930,
}

const electricVehicle = {
    make: 'Tesla',
    model: 'Model X',
    bhp: 1006,
    batteryCapacity: 100,
    timeToCharge: 9,
    supportsSolar: false,
}

const _yamaha = new Retro(
    combustionVehicle.make,
    combustionVehicle.model,
    combustionVehicle.bhp,
    combustionVehicle.tankCapacity,
    combustionVehicle.isDiesel,
    combustionVehicle.year
);

const _tesla = new solarCharged(
    electricVehicle.make,
    electricVehicle.model,
    electricVehicle.bhp,
    electricVehicle.batteryCapacity,
    electricVehicle.timeToCharge,
    electricVehicle.supportsSolar
);

console.log(_yamaha.getBhp());
console.log(_tesla.isSolarPowered());