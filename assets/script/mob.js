import {Monster} from "./monster.js";

export class Mob extends Monster {
    constructor() {
        super();
        super.name = "Skeleton ";
        this.attack = Mob.attack;
        this.defense = Mob.defense;
        this.health = Mob.health;
        }

    add(container) {
        let img = document.createElement("img");
        img.src = this.sprite;
        container.appendChild(img);
    }

}