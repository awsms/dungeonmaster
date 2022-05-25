import {Boss} from "./boss";

export class TurboBoss extends Boss {
    constructor() {
        super();
        super.attack = Boss.attack * 2;
        super.defense = Boss.attack * 2;
        super.health = Boss.attack * 2;
    }

    add(container) {
        let img = document.createElement("img");
        img.src = this.sprite;
        container.appendChild(img);
    }

    dropItem() {
    }
}