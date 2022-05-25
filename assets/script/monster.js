export class Monster {
    static spritePath = "assets/images";
    #sprite
    // static dropRate;
    #name;
    #strength;
    #defense;
    #healthPoints;
    #target;

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

    get healthPoints() {
        return this.#healthPoints;
    }

    set healthPoints(value) {
        if (value > 100) {
            this.#healthPoints = 100;
        } else if (value < 0) {
            this.#healthPoints = 0;
        } else 
            this.#healthPoints = value;
    }

    get sprite() {
        return this.#sprite;
    }

    set sprite(name) {
        this.#sprite = `${Monster.spritePath}/${name}.png`;
    }

    get target() {
        return this.#target;
    }

    set target(value) {
        this.#target = value;
    }

    // get dropRate() {
    //     return this.#dropRate;
    // }
    //
    // set dropRate(value) {
    //     this.#dropRate = value;
    // }


    attack(target) {
        if (target.defense - this.#strength < 0) {
            target.healthPoints = target.defense - this.#strength
        }

    }
}