// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.



function declareWinner(fighter1, fighter2, firstAttacker) {
  let t = true;
  let att = true;
  let f1 = firstAttacker === fighter1.name ? fighter1 : fighter2;
  let f2 = fighter1.name === f1.name ? fighter2 : fighter1;
  while (t) {
    if (att === true) {
      att = !att;
      f2["health"] = f2["health"] - f1["damagePerAttack"];
    } else {
      att = !att;
      f1["health"] = f1["health"] - f2["damagePerAttack"];
    }
    if (f1["health"] < 0 || f2["health"] < 0) {
      t = false;
    }
  }
  if (f1.health <= 0) {
    return f2.name;
  } else {
    return f1.name;
  }
}
