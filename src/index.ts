import { startTicking, moveYou } from './execution';

import { Direction, simpleLocationDraw, Location } from './classes/location';
import { GameObject } from './classes/interfaces/GameObject';
import { getCurrentLocation } from './classes/state';
import { symbolLocationDraw } from './classes/enhancements/location-enhancements';
import { Person } from './classes/person';
import { setFind, setFilter } from './classes/routines/utils';
import { init } from './initialstate';
const css = require('./main.css');

export default class Main {
  constructor() {
    console.log('Typescript Webpack starter launched');

    let startState = init();
    let userId = setFind(startState, (obj: GameObject) => obj.symbol === 'J')
      ._id;
    let startLocation: Location = getCurrentLocation(startState, userId);
    startTicking(startState, startLocation, (curState: Set<GameObject>) => {
      let curLocation = getCurrentLocation(curState, userId);
      if (curLocation == null)
        document.getElementById('first-location').innerHTML = '';
      else {
        document.getElementById('first-location').innerHTML = `${
          curLocation.name
        } \n${symbolLocationDraw(curState, curLocation)}`;
      }
      document.getElementById('person-info').innerHTML = setFilter(
        curState,
        (obj) => {
          return obj instanceof Person;
        },
      )
        .map((person) => person.asString())
        .sort()
        .join('\n');
    });
    document.addEventListener('keyup', (event) => {
      moveYou(__directionFromKey(event));
    });
  }
}

function __directionFromKey(event: KeyboardEvent): Direction {
  switch (event.keyCode) {
    case 37:
      return Direction.Left;
    case 38:
      return Direction.Up;
    case 39:
      return Direction.Right;
    case 40:
      return Direction.Down;
    default:
      return null;
  }
}

let start = new Main();
