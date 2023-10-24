import { reactive } from 'vue'
import { Outside_Grimtol, allRooms } from './Rooms.js'
import { Room } from './models/Room.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  player : null,
  /** @type {Room}  */
  activeRoom : null,
  windowText: '',
  rooms: allRooms,

  connections: [],
  actions : [],

  showSite: false
})


