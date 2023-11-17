enum PlayerType {
  GOALKEEPER = "Goalkeeper",
  DEFENDER = "Defender",
  MIDFIELDER = "Midfielder",
  FORWARD = "Forward",
}

interface Player {
  name: string;
  lastName: string;
  age: number;
  ability: number;
  points: number;
  items: string[];
}

class Player {
  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  getStats() {
    return {
      ability: this.ability,
      points: this.points,
      items: this.items,
    };
  }
}

class PlayerBuilder {
  private player: Player;

  constructor(name: string, lastName: string, age: number) {
    this.player = new Player(name, lastName, age);
  }

  setAbility(ability: number) {
    this.player.ability = ability;
    return this;
  }

  setPoints(points: number) {
    this.player.points = points;
    return this;
  }

  setItems(items: string[]) {
    this.player.items = items;
    return this;
  }

  build() {
    return this.player;
  }
}

const player = new PlayerBuilder("Lionel", "Messi", 33)
  .setAbility(100)
  .setPoints(100)
  .setItems(["Boots", "Shirt"])
  .build();

console.log(player);
console.log(player.getStats());
