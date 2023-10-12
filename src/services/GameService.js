


class GameService{

  takeAction(original, targets){
    try {
      let action = ''
      switch(original.toLowerCase().trim()){
        case 'go':
        case 'move':
        case 'travel':
        case 'walk':
        case 'run':
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
          action = 'help'
          break;
        default :
          action = 'say'
          break;
      }

      let fn = this[action]
      if(!fn) throw new Error(action)
      return fn(original, targets)

    } catch (error) {
      if(!error.custom) return `Im sorry I don't understand "${original} ${targets.join(' ')}"`
      return error.custom
    }
  }

  attack(command, targets){
    return `attacking ${targets}`
  }

  look(command, targets){
    return `looking at ${targets}`
  }

  take(command, targets){
    return `taking ${targets}`
  }

  move(command, targets){
    return `moving ${targets}`
  }

  use(command, targets){
    return `using ${targets}`
  }

  say(command, targets){
    return `you say "${command} ${targets}", the air is so cold you can see your own breath.`
  }

  help(command, targets){
    return `your current commands are use, move, take, look.`
  }

}

export const gameService = new GameService()
