import { Entity } from "./Entity.js"

export class Character extends Entity{
  constructor(data){
    super(data.destroyed, data.hidden)
    this.name = data.name
    this.health = data.health
    this.weapon = data.weapon
    this.items = data.items
  }
}
