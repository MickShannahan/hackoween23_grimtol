import { Entity } from "./Entity.js"

export class Character extends Entity{
  constructor(data){
    super()
    this.name = data.name
    this.health = data.health
    this.weapon = data.weapon
    this.items = data.items
  }
}
