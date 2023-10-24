import { AppState } from "./AppState.js";
import { Room } from "./models/Room.js";


export const Outside_Grimtol = new Room({
name: "Outside Grimtol Tower",
alias: ["outside", "forrest"],
description: "The broken spire of Grimtol stands crooked in the mud.",
discoverText: "Wandering into a clearing from the wood you happen upon an ancient stone tower. it's peak hiding beneath the gnarled tree line. something something, battered bricks and shattered glass, held down by the vines, almost like it's being restrained by the forrest.",
})

const Grimtol_Spire = new Room({
  name: "Room atop Grimtol's spire",
  alias: ["tower", "inside", "castle", "hole"],
  description: "The room is open to the elements, with branches and debris scattered along the stone walls",
  discoverText: "As you move to enter the tower from the large opening in its exterior you feel a gust of wind shoot outward from the tower. It's a cold wind that leaves you feeling uneasy.",
})
Outside_Grimtol.connect(Grimtol_Spire, "A large hole in the stone exterior leads to into the spire")
// Grimtol_Spire.connect(Outside_Grimtol, "A large whole leads back out into the dark forrest.")

const Grimtol_Spire_Stairway = new Room({
  name: 'Staircase landing',
  alias: ['down', 'stairs', 'hatch'],
  discoverText: "The stairs wind down and around descending into darkness. You have turn on your oil lamp as you travel downward. Even with your light, the dark clings to the recesses of the stairway like a dense fog. You travel for some time loosing all sense of direction. At the bottom there is a heavy wood door, that you push through.",
  description: "The landing is cold and dark, the air is stale filled with dust. In front of you you see the an unnatural light shine dimly through the crack of two large double doors opposite of you."
})
Grimtol_Spire.connect(Grimtol_Spire_Stairway, "There is a old wooden hatch in the floor, with stairs spiraling down.", '', false, true)

const Grimtol_Spire_Balcony = new Room({
  name: "Spire Balcony",
  alias: ['Double Doors', 'light', 'outside'],
  discoverText: "The Double doors open out to a large balcony. As you approach the edge of the balcony you can see the source of the light. A ruined city deep below the surface. The buildings lit by lamps or flickering flames. Streets as far as your eye can see. While your hundreds of feet above what what even looks like the tallest building, you can see it's denizens bustle about on the roads like ants navigation a cobblestone road.",
  description: "The stone work of the balcony is in much better condition then that of the tower above. A sizable city can be seen below, alive with all the hustle and bustle of one above ground."
})
Grimtol_Spire_Stairway.connect(Grimtol_Spire_Balcony, "Light escapes from the small opening between 2 large double doors.")


// SECTION all rooms exported
export const allRooms = [
  Outside_Grimtol,
  Grimtol_Spire,
  Grimtol_Spire_Stairway,
  Grimtol_Spire_Balcony
]
