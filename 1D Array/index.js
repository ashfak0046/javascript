function highestScore(scores) {
  let max = scores[0];
  for (let i = 1; i <= scores.length; i++) {
    if (max < scores[i]) {
      console.log(scores[i]);
      max = scores[i];
    }
  }
  return max;
}
let score = [21, 28, 1, 88, 15];
const maxValue = highestScore(score);
document.write(`<h1 style="color:cyan">${maxValue}</h1>`);

// ///////2D ARRAY/////////

function highestRunScorer(playerInfo) {
  let highestScorer = playerInfo[0][0];
  let highestScore = playerInfo[0][1];

  for (let x = 0; x < playerInfo.length; x++) {
    if (highestScore < playerInfo[x][1]) {
      highestScore = playerInfo[x][1];
      highestScorer = playerInfo[x][0];
    }
  }
  return highestScorer;
  // console.log(playerInfo);
}
var playerInfo = [
  ["Ashfak", 45],
  ["Taskin", 56],
  ["Mahbub", 27],
  ["Ratul", 75],
];
const name = highestRunScorer(playerInfo);
console.log(name)

