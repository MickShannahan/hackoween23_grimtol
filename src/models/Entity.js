import { generateId } from "../utils/GenerateId.js"

export class Entity{
constructor(destroyed = false){
  this.id = generateId()
  this.destroyed = destroyed
}
}
