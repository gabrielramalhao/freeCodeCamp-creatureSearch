const input = document.getElementById('search-input');
const btn = document.getElementById('search-button');
const creatureName = document.getElementById('creature-name');
const creatureId = document.getElementById('creature-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const url = 'https://rpg-creature-api.freecodecamp.rocks/api/creature/';

async function getData() {
  try {
    const response = await fetch(url+`${input.value}`);
    if(!response.ok) {
      alert("Creature not found")
  } 
    const creature = await response.json();

    console.log(creature);
    showCreature(creature);
    showTypes(creature);

  } catch(error) {
      console.error(error.message);
  }
}

const showTypes = (creature) => {
  const index = creature.types[1] ? 1 : 0;

  if(index === 1) {
    types.innerHTML = `
    <span>${creature.types[index - 1].name}</span>
    <span>${creature.types[index].name}</span>`;
    return;
  } else {
      types.innerHTML = `<span>${creature.types[index].name}</span>`;
  }
}

const showCreature = (creature) => {
    creatureName.textContent = creature.name;
    creatureId.textContent = `#${creature.id}`;
    weight.textContent = `Weight: ${creature.weight}`;
    height.textContent = `Height: ${creature.height}`;
    hp.textContent = creature.stats[0].base_stat;
    attack.textContent = creature.stats[1].base_stat;
    defense.textContent = creature.stats[2].base_stat;
    specialAttack.textContent = creature.stats[3].base_stat;
    specialDefense.textContent = creature.stats[4].base_stat;
    speed.textContent = creature.stats[5].base_stat;
}

btn.addEventListener('click', getData);