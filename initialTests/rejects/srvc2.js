angular.module('harold').service('srvc', function(){

this.story =
[
  {
    idx: [0],
    choice: "Start over",
    text: "Bob woke up and got ready for work",
    choice1: 1,
    choice2: 2
  },
  {
    idx: [1],
    choice: "Bob chose to fly to work today",
    text: "Bob lived on the 30th floor. He jumped out the window, and flapped his arms to fly. Bob was just as human as anyone else. He fell like a rock and died on impact.",
    choice1: 0
  },
  {
    idx: [2],
    choice: "Bob chose to walk to work today",
    text: "On his way to work today, Bob saw a burglar steal a  beautiful woman's purse.",
    choice1: 3,
    choice2: 4
  },
  {
    idx: [3],
    choice: "Bob decided to be a hero",
    text: "Bob chased the man down and whacked him on the noggin with his breifcase! He took the purse from the unconcious thief and when he glanced at it, he saw it was full of diamonds!",
    choice1: 5,
    choice2: 6
  },
  {
    idx: [4],
    choice: "Bob decided to call the police",
    text: "The police asked the Bob and the woman for the description of the thief, they gave it and went about their business. Bob got to work and after lunch saw a mysterious note on his desk. The note said to meet someone in alley behind the building after dark.",
    choice1: 7,
    choice2: 8
  },
  {
    idx: [5],
    choice: "Bob decided being a hero was for chumps.",
    text: "Obviously that woman must've stolen the diamonds and since they weren't hers, Bob thought he might as well take them.",
    choice1: 9,
    choice2: 10
  },
  {
    idx: [6],
    choice: "Bob took the purse back to the woman",
    text: "The woman was the secret Princess of The Moon. After turning in the thief, She invited Bob to her palace on the Moon, and they got married and lived happily ever after, as the secret King and Queen, of The Moon.",
    choice1: 0
  },
  {
    idx: [7],
    choice: "intrigued, Bob made sure to go to the alley",
    text: "The alley appeared to be just like any other random alley, their was a mangy cat going through the garbage, some boxes and newspapers strung about, and a oddly familiar homeless man with an ak-47. Bob realized his mistake too late and was gunned down by the theif from that morning before he could even turn around to run.",
    choice1: 0
  },
  {
    idx: [8],
    choice: "fearing for his life, Bob called the police right then.",
    text: "The person who left the note was caught and was none other than the very thief Bob had thwarted that morning. He was one of the most wanted men in america, and Bob was given a ten millioin dollar reward. He retired and moved to a private ranch in Montana and lived happily ever after.",
    choice1: 0
  },
  {
    idx: [9],
    choice: "Bob sold the diamonds to a black market dealer his shady friend Kevin knew.",
    text: "After selling the diamonds Bob left the country and lived a very comfortable life as a rich gringo in Mazatlan Mexico",
    choice1: 0
  },
  {
    idx: [10],
    choice: "Bob sold a few diamonds at a pawn shop.",
    text: "He sold the diamonds little by little to different pawn shops and might've become very rich, if the thief hadn't shown up at his apartment one night and knifed him in the back.",
    choice1: 0
  }
];
});
