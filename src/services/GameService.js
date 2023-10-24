import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import { roomsService } from "./RoomsService.js";



class GameService{

  takeAction(original, targets = []){
    try {
      let action = ''
      switch(original.toLowerCase().trim()){
        case 'go':
        case 'move':
        case 'travel':
        case 'walk':
        case 'run':
        case 'skip':
        case 'frolic':
        case 'enter':
          action = 'move'
          break;
        case 'use':
        case 'open':
          action = 'use'
          break;
        case 'strike':
        case 'hit':
        case 'attack':
        case 'stab':
        case 'slice':
        case 'cut':
        case 'punch':
        case 'kick':
        case 'bite':
          action = 'attack'
          break;
        case 'take':
        case 'grab':
        case 'hold':
        case 'get':
          action = 'take'
          break;
        case 'look':
        case 'investigate':
        case 'perception' :
        case 'perceive':
          action = 'look'
          break;
        case 'help':
        case 'what':
        case 'commands':
        case 'actions':
        case 'info':
          action = 'help'
          break;
        default :
          action = 'say'
          break;
      }
      logger.log('action', action)
      let fn = this[action]
      if(fn == undefined) throw new Error(action)

      return fn(original, targets)

    } catch (error) {
      logger.error(error)
      if(!error.custom) return `Im sorry I don't understand "${original} ${targets.join(' ')}"`
      return error.custom
    }
  }

  attack(command, extra){
    return `attacking ${extra}`
  }

  look(command, extra){
    const room = AppState.activeRoom
    AppState.windowText = room.description
    const hidden = room.connectedRooms.filter(conn => conn.hidden)
    hidden.forEach(r => r.hidden = false)
    if(hidden.length){
      return `You look around.`
    } else {
      return `You look around, but there is nothing else of interest to observe.`
    }
  }

  take(command, extra){
    return `taking ${extra}`
  }

  move(command, extra){
    const targets = _regTargets(extra)
    const activeRoom = AppState.activeRoom
    let foundRoom = activeRoom.connectedRooms.find(conn =>{
      return conn.tryMove(targets)
    })
    if(foundRoom.room.name == 'Spire Balcony') AppState.showSite = true;
    if(foundRoom){
      logger.log('foundRoomed', foundRoom)
      roomsService.enter(foundRoom.room.name)
      return `You ${command} ${extra.join(' ')}`
    } else {
      return `You cannot ${command} ${extra}.`
    }
  }

  use(command, extra){
    return `using ${extra}`
  }

  say(command, extra){
    return `you say "${command} ${extra}", the air is so cold you can see your own breath.`
  }

  help(command, extra){
    return `your current commands are use, move, take, look.`
  }

}

function _regTargets(targets){
  let map = targets.map(t => new RegExp(t, 'ig'))
  return map
}

export const gameService = new GameService()
