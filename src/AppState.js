import { reactive } from 'vue'
import { Outside_Grimtol } from './Rooms.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  player : null,
  activeRoom : null,
  rooms: [],

  connections: [],
  actions : []
})


