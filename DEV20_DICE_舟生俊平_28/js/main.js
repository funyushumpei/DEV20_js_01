// 0=グー 1=チョキ 2=パー
var whitedice = [1, 5, 9];
var blackdice = [3, 4, 8];
var reddice = [2, 6, 7];
var level = 1;

$("#WHITE").on("click", function () {
  var random = Math.floor(Math.random() * level);
  var Player = whitedice[Math.floor(Math.random() * whitedice.length)];
  if (random === 0) {
    CPU = reddice[Math.floor(Math.random() * reddice.length)];
  } else {
    CPU = blackdice[Math.floor(Math.random() * blackdice.length)];
  }

  if (Player > CPU) {
    $("#ex").text("勝ち");
  } else {
    $("#ex").text("負け");
  }
  console.log(Player);
  console.log(CPU);
});

$("#BLACK").on("click", function () {
  var random = Math.floor(Math.random() * level);
  var Player = blackdice[Math.floor(Math.random() * blackdice.length)];
  if (random === 0) {
    CPU = whitedice[Math.floor(Math.random() * whitedice.length)];
  } else {
    CPU = reddice[Math.floor(Math.random() * reddice.length)];
  }

  if (Player > CPU) {
    $("#ex").text("勝ち");
  } else {
    $("#ex").text("負け");
  }
  console.log(Player);
  console.log(CPU);
});

$("#RED").on("click", function () {
  var random = Math.floor(Math.random() * level);
  var Player = reddice[Math.floor(Math.random() * reddice.length)];
  if (random === 0) {
    CPU = blackdice[Math.floor(Math.random() * blackdice.length)];
  } else {
    CPU = whitedice[Math.floor(Math.random() * whitedice.length)];
  }

  if (Player > CPU) {
    $("#ex").text("勝ち");
  } else {
    $("#ex").text("負け");
  }
  console.log(Player);
  console.log(CPU);
});
