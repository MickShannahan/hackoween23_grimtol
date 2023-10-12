import { AppState } from "../AppState.js"
import { Room } from "../models/Room.js"



class RoomsService{


  /**
   *
   * @param {Room} room
   */
  enter(room){
    room.visited = true
    AppState.activeRoom = room
  }
}

export const roomsService = new RoomsService()
