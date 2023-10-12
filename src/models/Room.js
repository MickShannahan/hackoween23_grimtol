/**
 * @typedef roomData
 * @property {string} name
 * @property {string} description
 * @property {string} discoverText
 * @property {Connection[]} connectedRooms
 * @property {Entity[]} entities
 */


export class Room{
  /**
   * @constructor
   * @param {roomData} data
   */
  constructor(data){
    this.name = data.name
    this.artwork = data.artwork
    this.description = data.description
    this.discoverText = data.discoverText
    this.connectedRooms = data.connectedRooms || []
    this.items = data.items || []
    this.entities = data.entities || []
    this.visited = false
    this.alias = data.alias || []
  }

  connect(room, description, direction,locked, hidden ){
    this.connectedRooms.push(
    new Connection({
      room, locked, direction, description, hidden
    }, this)
    )
  }

  connected(room){
    return this.connectedRooms.find(r => r == room)
  }
}

export class Connection{
  constructor({room, description = '', direction = '', locked = false, hidden= false}){
    const roomCopy = {...room}
    delete roomCopy.connectedRooms
    this.room = roomCopy
    this.description = description
    this.direction = direction
    this.locked = locked
    this.hidden = hidden
  }
}
