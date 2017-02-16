
function dwarfRollCall(dwarves) {
  var line = [];
  for (var i = 0; i < dwarves.length; i++) {
    var list = ((i + 1) + '. ' + dwarves[i]);
    line.push(list);
  }
    return line.join(" ") + " ";
}

function summonCaptainPlanet(veggies){
  var arr = [];
  for (var i = 0; i < veggies.length; i++) {
    var veg = veggies[i].toUpperCase() + "!";
    arr.push(veg);
  }
    return arr;
}

function longPlaneteerCalls(words) {
for (var i = 0; i < words.length; i++) {
    if (words[i] < words[i + 4]) {
    return true;
    } else {
    return false;
  }
 }
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === 'cheddar') {
      return 'cheddar';
    } else if (foods[i] === 'gouda') {
      return 'gouda';
    } else if (foods[i] === 'camembert') {
      return 'camembert';
    }
  } return "no cheese!";
}
