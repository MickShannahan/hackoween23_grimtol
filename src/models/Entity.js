import { generateId } from "../utils/GenerateId.js"

export class Entity{
constructor(destroyed = false, hidden = false){
  this.id = generateId()
  this.destroyed = destroyed
  this.hidden = hidden
}
}
