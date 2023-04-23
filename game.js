const foods = ["Chocolate", "Beef", "Beer", "Bio-diesel", "Sheep Meat", "Pork", "Butter", "Chicken meat", "Cheese", "Olives", "Rice", "Cotton", "Tea", "Pasta (dry)", "Bread", "Pizza", "Apple", "Banana", "Potatoes", "Milk", "Cabbage", "Tomato", "Egg", "Wine"];
const water = [17196, 15415, 74, 11397, 10412, 5988, 5553, 4325, 3178, 3025, 2497, 2496, 27, 1849, 1608, 1239, 822, 790, 287, 255, 237, 214, 196, 109, 74, 27];
let score = 0;
let compare = getRandomInt(foods.length);
let guess = getRandomInt(foods.length);
const gameDiv = document.getElementById("game");

function game(compare, score) {
  gameDiv.innerHTML = `
    <p>--------------------------------------------------</p>
    <p>Your score is: ${score}</p>
    <p>The food is: ${foods[compare]}</p>
    <p>The water usage is: ${water[compare]} liters/kg</p>
    <p>Is ${foods[guess]} higher or lower in water usage?</p>
    <input type="text" id="answer" placeholder="Enter 'higher' or 'lower'">
    <button onclick="checkAnswer()">Submit</button>
  `;
}

function checkAnswer() {
  const answer = document.getElementById("answer").value;
  if (answer === "higher") {
    if (water[guess] > water[compare]) {
      score++;
      compare = guess;
      guess = getRandomInt(foods.length, compare);
      game(compare, score);
    } else {
      endGame();
    }
  } else if (answer === "lower") {
    if (water[guess] < water[compare]) {
      score++;
      compare = guess;
      guess = getRandomInt(foods.length, compare);
      game(compare, score);
    } else {
      endGame();
    }
  } else {
    alert("Please enter 'higher' or 'lower'");
  }
}

function endGame() {
  gameDiv.innerHTML = `
    <p>--------------------------------------------------</p>
    <p>The food was: ${foods[guess]}</p>
    <p>The water usage is: ${water[guess]} liters/kg</p>
    <p>Your score was: ${score}</p>
    <p>Game Over!</p>
    <button onclick="restart()">Play Again</button>
  `;
}

function restart() {
  score = 0;
  compare = getRandomInt(foods.length);
  guess = getRandomInt(foods.length);
  game(compare, score);
}

function getRandomInt(max, exclude) {
  let num = Math.floor(Math.random() * Math.floor(max));
  while (exclude !== undefined && num === exclude) {
    num = Math.floor(Math.random() * Math.floor(max));
  }
  return num;
}

game(compare, score);
