import { AppState } from "./AppState.js";
import { Room } from "./models/Room.js";


export const Outside_Grimtol = new Room({
name: "Outside Grimtol Tower",
alias: ["outside", "forrest"],
description: `The tower's stone facade is weathered and battered, displaying countless years against the elements. The glass windows shattered, their fragments scattered on the ground around the tower's base.\n\n
Nature, it seems, has laid claim to this venerable structure. Thick, creeping vines drape themselves over the stone, as if attempting to pull the tower back into the embrace of the forest. They form intricate patterns, their tendrils wrapping around corners and windows, almost as though they are restraining the tower from escape. The very stones themselves seem entwined in this verdant struggle, as moss and lichen paint the tower's surface with nature's colors.`,
discoverText: "Wandering into a clearing from the woods you happen upon an ancient stone tower. It's peak concealed beneath the tangle of gnarled branches and leaves that make up the tree line. The tower exudes an aura of mystery and timelessness, its presence both captivating and haunting. A large hole in the wall of the tower, maybe once a window leads inside.",
})

const Grimtol_Spire = new Room({
  name: "Room atop Grimtol's spire",
  alias: ["tower", "inside", "castle", "hole"],
  description: `<p>Debris and branches from the forest have scattered along the walls, creating a chaotic, natural collage. The air is cool and damp, carrying the scents of the forest. Birds and insects move in and out, adding their voices to the wild symphony. It's a space nature has reclaimed, blurring the line between inside and outside, a delicate balance of creation and decay.</p><p>
  You find and old wooden hatch in the floor. Opening it you see stone stairs spiraling down.</p>`,
  discoverText: `Entering the tower's interior, you find a room exposed to the elements. The ceiling has vanished, replaced by a view of the forest canopy. Sunlight filters through, casting dappled patterns on the stone floor. Moss-covered, crumbling walls stand like ancient sentinels on either side.`,
})
Outside_Grimtol.connect(Grimtol_Spire, "A large hole in the stone exterior leads to into the tower.")
// Grimtol_Spire.connect(Outside_Grimtol, "A large whole leads back out into the dark forrest.")

const Grimtol_Spire_Stairway = new Room({
  name: 'Staircase landing',
  alias: ['down', 'stairs', 'hatch'],
  discoverText: `
  <p>
  The stone stairs wind down in a spiraling descent, disappearing into an ever-deepening darkness. As you venture further, the oppressive blackness prompts you to ignite your oil lamp, its warm glow pushing back the shadows. Yet, even with your light, the darkness clings to the recesses of the stairway like a dense fog, as if reluctant to relinquish its grasp.</p><p>
  You continue your journey down these winding steps for what feels like an eternity, the passage of time shrouded in the inky abyss that surrounds you. Gradually, you lose all sense of direction, and the world outside the small circle of your lamp's radiance becomes an impenetrable void.\n
  Finally, after what seems like an endless descent, you reach the bottom of the stairs. There, a heavy wooden door, worn by the weight of ages and history, stands before you. With determination, you push through the door.</p><p>
  The landing is frigid and shrouded in darkness, the air stagnant and heavy with dust. As you stand in this desolate space, an eerie, unnatural light filters dimly through the slender opening between two imposing double doors directly ahead of you.
  </p>
  `,
  description: `The landing is unwelcoming, its atmosphere marked by an unsettling coldness and a pervasive sense of obscurity. The air hangs heavy, laden with the stagnant remnants of time, filled with fine particles of dust that seem to drift in the stillness. Around the perimeter of the landing, above wainscoting adorned with faded wallpaper, you notice a series of ornate frames. These antique frames house old, cracked paintings that hang precariously on the walls. The subjects of these artworks, though obscured by the passage of time, seem to hint at a forgotten history or narrative, their colors muted and their forms distorted by the years they've spent in this cold and dusty chamber.`
})
Grimtol_Spire.connect(Grimtol_Spire_Stairway, "There is a open hatch in the floor, with stairs spiraling down.", '', false, true)

const Grimtol_Spire_Balcony = new Room({
  name: "Spire Balcony",
  alias: ['Double Doors', 'light', 'outside'],
  discoverText: `<p>
  The double doors open with a heavy creak, revealing a vast balcony beyond. As you step out onto the balcony, a breathtaking scene unfolds before your eyes. The source of the eerie light you observed earlier becomes clear - it emanates from a ruined city nestled deep below the surface.</p><p>

  The city's buildings, though in various states of disrepair, are illuminated by a myriad of lamps and flickering flames, casting an ethereal, almost haunting glow. The streets stretch out as far as your eyes can discern, a labyrinthine network of cobblestone roads and narrow alleys.</p><p>
  As you look out over this enigmatic city, a sense of recognition washes over you, and you recall the legends and tales you've heard of <i class="font-metal">Castle Grimtol</i> –
  </p>

  <p>
  In a distant realm a there was a kingdom. It contained a great city that thrived through advancements in science and magic for it's people. Its schools and colleges we know across the land. All this research and knowledge lead to bustling trade, full fields each harvest and of course happy people... But not everyone shared this vision of growth.
</p>
<p>
  One day a dark cloud fell upon the land. The beloved king, who had ruled with kindness for many years, fell ill. Confident in his peoples abilities, he offered a generous reward to anyone who could heal him, with the sole desire of continuing the growth of the kingdom. Many healers and sorcerers tried but non could aid him, the sickness was quite unnatural.
</p>
<p>
Until one morning, a mysterious stranger entered the royal court, claiming to not only possess the cure the king seeked but more. However the stranger's proposition was unlike any other. He promised to bestow upon him and the entire kingdom the gift of eternal life. All that was required was the construction of a tower that reached as high as the tallest mountain in the land. The king, seduced by the stranger's words, agreed without realizing the curse that accompanied the magic.
</p>
<p>
As years passed, the tower extended towards the clouds. As the tower grew so did the power of the strangers curse, transforming its inhabitants into grotesque and disfigured versions of their former selves.
</p>
<p>
Stories of the curse's grip spread to neighboring kingdoms, sparking fear. In response, several great druids were summoned to contain this monstrous affliction. In a solemn ceremony, they sealed city, it's inhabitants and the monolithic tower beneath the ground. With the once-thriving kingdom buried beneath the earth, <i class="font-metal">Grimtol's</i> grandeur and tragedy faded into forgotten history...
</p>
<p class="pb-0">How will you proceed?</p>`,
  description: "The stone work of the balcony is in much better condition then that of the tower above. A sizable city can be seen below, alive with all the hustle and bustle of one above ground."
})
Grimtol_Spire_Stairway.connect(Grimtol_Spire_Balcony, "Light escapes from the small opening between two large ornate doors.")


// SECTION all rooms exported
export const allRooms = [
  Outside_Grimtol,
  Grimtol_Spire,
  Grimtol_Spire_Stairway,
  Grimtol_Spire_Balcony
]
