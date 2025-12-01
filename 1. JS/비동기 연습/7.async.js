function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.resolve(`☘️ => 🐓`);
}

async function asyncGetChicken() {
  const chicken = await getChicken();
  const egg = await fetchEgg(chicken);
  const friedEgg = await fryEgg(egg);
  return friedEgg;
}

asyncGetChicken().then((friedEgg) => console.log(friedEgg));
