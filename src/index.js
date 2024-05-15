class Character {
    constructor (name, type, health, level, attack, defince) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defince = defince;
    }
}

class Team {
    constructor() {
        this.members = new Set();
    }
    add(character) {
        if (this.members.has(character)) {
            throw new Error('character ear exists');
        }
        this.members.add(character);
        return this.members;
    }
    addAll(...heros) {
        for (const hero of heros) {
            this.members.add(hero)
          }
          return this.members;
    }
    toArray() {
        let arrayHeros = [];
        this.members.forEach(member => arrayHeros.push(member));
        return arrayHeros;
    }
    [Symbol.iterator](arrayHeros) {
        let index = -1;
        return {
            next () {
                if (index > arrayHeros.length - 2) {
                    return {
                        value: undefined,
                        done: true
                    }
                }
                index ++;
                return {
                    value: arrayHeros[index],
                    done: false
                }
            }
        }
    }
}

const ser = new Character ('Sergey', 'Vampire', 50, 1, 40, 10);
const anna = new Character('Anna', 'Bard', 35, 2, 25, 25);
const boris = new Character('Boris', 'Magitian', 60, 1, 10, 40);
const keit = new Character('Keit', 'Bowman', 40, 2, 25, 25);

const team = new Team();
team.addAll(ser, anna, boris, keit);
const arrayHeros = team.toArray();

const data = team[Symbol.iterator](arrayHeros);
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());

// for (let item of arrayHeros) {
//     console.log(item)
// }

// console.log([...arrayHeros])