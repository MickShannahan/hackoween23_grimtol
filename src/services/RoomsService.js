import { AppState } from "../AppState.js"
import { Room } from "../models/Room.js"



class RoomsService{


  /**
   *
   * @param {Room} roomName
   */
  enter(roomName){
    const room = AppState.rooms.find(r => r.name == roomName)
    if(!room) throw new Error ({custom: "That room does not exist"})
    if(AppState.activeRoom) AppState.activeRoom.visited = true
    AppState.windowText = room.discoverText
    AppState.activeRoom = room
  }
}

export const roomsService = new RoomsService()
