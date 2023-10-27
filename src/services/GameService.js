import { AppState } from "../AppState.js";
import { Outside_Grimtol } from "../Rooms.js";
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
    if(foundRoom){
      logger.log('foundRoomed', foundRoom)
      roomsService.enter(foundRoom.room.name)
      if(foundRoom.room.name == 'Spire Balcony'){
        revealSite()
      }
      saveState()
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
    return `your current commands are move and look.`
  }

   loadState(){
    let raw = localStorage.getItem('hackoween23_Grimtol')
    if(raw){
      let data = JSON.parse(raw)
      AppState.showSite = data.showSite
      AppState.activeRoom = AppState.rooms.find(r => r.name == data.activeRoom.name)
      roomsService.enter(AppState.activeRoom.name)
    } else {
      logger.log('new game')
      roomsService.enter(Outside_Grimtol.name)
    }
  }
}

function _regTargets(targets){
  let map = targets.map(t => new RegExp(t, 'ig'))
  return map
}

function revealSite(){
  setTimeout(()=>{
    AppState.showSite = true;
    saveState()
  }, 1000)
}

function saveState(){
  let data = JSON.stringify(AppState)
  localStorage.setItem('hackoween23_Grimtol', data)
}


export const gameService = new GameService()
