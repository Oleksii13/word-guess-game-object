
var obj = {
  userText: document.getElementById("text"),
  words: [
    "hitler",
    "kungfury",
    "hackerman",
    "barbariana",
    "treciracop",
    "thor"
  ],
  myImage: document.getElementById("image"),
  imageArray: [
    "assets/images/hitlerSmall.jpg",
    "assets/images/kungfurySmall.jpg",
    "assets/images/hackermanSmall.jpg",
    "assets/images/barbarianaSmall.jpg",
    "assets/images/treciracopSmall.jpg",
    "assets/images/thorSmall.jpg"
  ],
  looses: 0,
  wins: 0,
  guessRemain: 5,
  letterGuess: "",
  letterSmall: "",
  randomWord: function() {
    var randomW = this.words[Math.floor(Math.random() * this.words.length)];
    var imageIndex = this.words.indexOf(randomW);
    this.myImage.setAttribute("src", this.imageArray[imageIndex]);

    randomW = randomW.split("");
    return randomW;
  },
  dashedWord: function(word) {
    var dashWord = [];
    for (i = 0; i < word.length; i++) {
      dashWord[i] = "_";
    }
    return dashWord;
  },

  guessed: function(choose) {
    var check = this.letterSmall.indexOf(choose);

    if (check == -1) {
      this.letterSmall = this.letterSmall.concat(choose, " ");
      var upperChoose = choose.toUpperCase();
      this.letterGuess = this.letterGuess.concat(upperChoose, " ");
      this.indexFunct(choose);
    }
  },
  indexFunct: function(choose) {
    var index = word.indexOf(choose);

    if (index >= 0) {
      for (i = 0; i < word.length; i++) {
        if (word[i] == choose) {
          dashWord[i] = choose;
          word[i] = " ";
        }
      }
    } else {
      this.guessRemain--;
    }
  },
  screenText: function() {
    this.userText.innerHTML =
      "<h1>Press any key to get started!</h1><br><p>Looses: " +
      obj.looses +
      "</p><br><p>Wins: " +
      obj.wins +
      "</p><br><p>Guess Remaining: " +
      obj.guessRemain +
      "</p><br><p>Letters guessed: " +
      obj.letterGuess +
      "</p><br><p>The word is: " +
      dashWord.join(" ") +
      "</p><br><p></p>";
  }
};

var word = obj.randomWord();
var dashWord = obj.dashedWord(word);

obj.screenText();

document.onkeyup = press;

function press(event) {
  var choose = event.key;
  obj.guessed(choose);

  if (obj.guessRemain > 0) {
    obj.screenText();
    var winner = dashWord.indexOf("_");
    if (winner == -1) {
      obj.wins++;
      word = obj.randomWord();
      dashWord = obj.dashedWord(word);
      obj.letterGuess = "";
      obj.letterSmall = "";
      obj.guessRemain = 5;
      obj.screenText();
    }
  } else if (obj.guessRemain == 0) {
    word = obj.randomWord();
    dashWord = obj.dashedWord(word);
    obj.letterGuess = "";
    obj.letterSmall = "";
    obj.guessRemain = 5;
    obj.looses++;
    obj.screenText();
  }
}
