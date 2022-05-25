import {Hero} from "./hero.js";
import {Mob} from "./mob.js";
import {Boss} from "./boss.js";
import {TurboBoss} from "./turboboss.js";

export function newGame() {
    const game = {
        floor: 1,
        hero: new Hero(),
        monster: new Mob(),
        attackButton: document.querySelector('#btn-attack'),
        useButton: document.querySelector('#btn-use'),
        nextButton: document.querySelector('#btn-next'),
        playerHealthBar: document.querySelector('#hero-health_bar'),
        mobHealthBar: document.querySelector('#monster-health_bar'),
        elContainer: document.querySelector("#background"),
        elFloor: document.querySelector('#floor'),
        elInventory: document.querySelector("#inventory"),
        elWeapons: document.querySelector("#weapons"),
        elPotions: document.querySelector("#potions"),
        elLose: document.querySelector("#lose")
    }
    game.elFloor.innerText = "1st Floor";
    game.attackButton.style.display = "block";
    game.monster.add(game.elContainer);
    updateHealth(game);
    return game;
}

export function updateInventory(game) {
}

export function updateHealth(game) {
    game.playerHealthBar.style.height = game.hero.health + "%";
    game.mobHealthBar.style.height = game.monster.health + "%";
    if (game.hero.potions > 0 && game.hero.health < 100)
        game.btnUseEl.style.display = "block";
}

export function lvlUp(game) {
    game.floor++;
    if (game.floor[-1] === 1) {
        game.elFloor.innerText = `${game.floor}st Floor`;
    } else if (game.floor[-1] === 2) {
        game.elFloor.innerText = `${game.floor}nd Floor`;
    } else if (game.floor[-1] === 3) {
        game.elFloor.innerText = `${game.floor}rd Floor`;
    } else game.elFloor.innerText = `${game.floor}th Floor`;


    const floorCoeff = game.floor / 10;
    if (game.floor % 10 === 0) {
        game.monster = new TurboBoss(floorCoeff);
    } else if (game.floor % 5 === 0) {
        game.monster = new Boss(floorCoeff);
    } else {
        game.monster = new Mob(floorCoeff);
    }
    game.monster.add(game.elContainer);
    game.nextButton.style.display = "none";
    game.attackButton.style.display = "block";
    updateHealth(game);
}

