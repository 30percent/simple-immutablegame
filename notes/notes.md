#Quick
* ~~Load state from json~~
* ~~Add way to create locations from file~~
* ~~Basic inventory~~
* Re-add furniture (method to remove status effects)
* Simple Styling (gives room for Mediums)
  * center map in box
  * box for object current map
* Display current inventory
* Item pickup
* ~~"Kill" Person on hp 0 (ignore in state, combat skips over)~~
* Routines should support "prioritization"
* Allow map config to reference a .json/.map for new Objects
* Use doodads instead of just walls

#Medium
* Basic Dialog (Form on side?)
* Items and inventory
  * Method to use inventory?
  * Set item active
* Build out "City"
* Drop inventory on death
* Routines from config

#Long
* "Minion" interaction
  * Some form of "combat"
  * Start with "dummy"
* NPC decision-based pathing
* Display only section of map *around* player
* Basic Encounter-Map generation
  * Use DnD BG as inpiration?

# Cleanup | Maintenance
* Fix garbage config code
* ~~Consider immer.js~~
* Improve immer integration, rely less on `place = place...`
* Remove `Map<string, T>` (it complicates for no benefit)
* ~~Improve "scenery" handling (walls)~~



(Unicode Characters)
⇑ ⇒ ⇐ ⇓
⌂ ⍝ ⍲ ⎄
⌯ ⍾ ⎈ ⍯