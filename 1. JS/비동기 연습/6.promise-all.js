function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("🍌"), 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("🍎"), 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no orange"));
}

Promise.all([getBanana(), getApple()]) //
  .then(
    ([banana, apple]) => console.log([banana, apple]) //
  );
