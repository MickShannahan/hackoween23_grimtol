import { Entity } from "./Entity.js";

export class Item extends Entity{
  constructor(data){
    super(data.destroyed, data.hidden)
    this.name = data.name
    this.description = data.description
  }
}
