import { Entity } from "./Entity.js";

export class Item extends Entity{
  constructor(data){
    super()
    this.name = data.name
    this.description = data.description
  }
}
