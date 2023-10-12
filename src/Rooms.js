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
  alias: ["tower", "inside", "castle"],
  description: "The room is open to the elements, with branches and debris scattered along the stone walls",
  discoverText: "As you move to enter the tower from the large opening in its exterior you feel a gust of wind shoot outward from the tower. It's a cold wind that leaves you feeling uneasy.",
})
Outside_Grimtol.connect(Grimtol_Spire, "A large hole in the stone exterior leads to into the spire")
// Grimtol_Spire.connect(Outside_Grimtol, "A large whole leads back out into the dark forrest.")
