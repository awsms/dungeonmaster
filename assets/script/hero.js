export class Hero {
    // #firstName
    #name
    #strength
    #defense
    #healthPoints
    #potions
    #inventory
    #maxHealthPoints
    // static xp = 0;
    static strength = 3;
    static minStrength = 3;
    static maxStrength = 10;
    static minDefense = 1;
    static maxDefense = 5;

    constructor(name, defense, maxHealthPoints, potions, inventory) {
        // this.#firstName = firstName;
        this.#name = name;
        // this.#strength = strength;
        // this.#strength = strength;
        this.#defense = defense;
        this.#maxHealthPoints = maxHealthPoints;
        this.#healthPoints = maxHealthPoints;
        this.#potions = potions;
        this.#inventory = inventory;
        // Hero.#xp = 0;
    }

    // get xp() {
    //     return this.#xp;
    // }

    // set xp(value) {
    //     this.#xp = value;
    // }

    get healthPoints() {
        return this.#healthPoints;
    }

    set healthPoints(value) {
        if (value > 100) {
            this.#healthPoints = 100;
        } else if (value < 0) {
            this.#healthPoints
        } else {
            this.#healthPoints = value;
        }
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(value) {
        this.#firstName = value;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get strength() {
        return this.#strength;
    }

    set strength(value) {
        this.#strength = value;
    }

    get defense() {
        return this.#defense;
    }

    set defense(value) {
        this.#defense = value;
    }

    get maxHealthPoints() {
        return this.#maxHealthPoints;
    }

    set maxHealthPoints(value) {
        this.#maxHealthPoints = value;
    }

    get potions() {
        return this.#potions;
    }

    set potions(value) {
        this.#potions = value;
    }

    get inventory() {
        return this.#inventory;
    }

    set inventory(value) {
        this.#inventory = value;
    }



    // updateHealthBar() {
    //     if (this.#healthPoints >= 0) {
    //         playerHealthBar.width -= this.#healthPoints/this.#maxHealthPoints;
    //     }
    //
    // }

    attack(target) {
        if (target.defense - this.#strength < 0) {
            target.healthPoints -= (target.defense - this.#strength)
        }
    }

}