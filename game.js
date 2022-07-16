const { exit } = require("process");
let cards = require("./cards.json");
//console.log(cards["10"])
function dealerHand() {
  //selecting a random number for card 1
  let C1Num = Math.floor(Math.random() * 13) + 1;
  //selecting a random number for card 2
  let C2Num = Math.floor(Math.random() * 13) + 1;
  // assigning card 1 number to a card
  if (C1Num <= 10 && C1Num != 1) {
    Card1 = String(C1Num);
    stCard = String(C1Num);
    dCard1 = cards[stCard];
  } else if (String(C1Num) == 1) {
    Card1 = "Ace";
    dCard1 = cards["a"];
  } else if (String(C1Num) == 11) {
    Card1 = "Jack";
    dCard1 = cards["j"];
  } else if (String(C1Num) == 12) {
    Card1 = "Queen";
    dCard1 = cards["q"];
  } else if (String(C1Num) == 13) {
    Card1 = "King";
    dCard1 = cards["k"];
  }

  //card 2 determination
  if (C2Num <= 10) {
    stCard2 = String(C2Num);
    dCard2 = cards[stCard2];
  } else if (String(C2Num) == 1) {
    stCard2 = "Ace";
    dCard2 = cards["a"];
  } else if (String(C2Num) == 11) {
    stCard2 = "Jack";
    dCard2 = cards["j"];
  } else if (String(C2Num) == 12) {
    stCard2 = "Queen";
    dCard2 = cards["q"];
  } else if (String(C2Num) == 13) {
    stCard2 = "King";
    dCard2 = cards["k"];
  }
  let dealerPoints = dCard1 + dCard2;
  return [dealerPoints, Card1, stCard2];
}

function userHand() {
  //selecting a random number for card 1
  let C1Num = Math.floor(Math.random() * 13) + 1;
  //selecting a random number for card 2
  let C2Num = Math.floor(Math.random() * 13) + 1;
  // assigning card 1 number to a card
  if (C1Num <= 10 && C1Num != 1) {
    Card1 = String(C1Num);
    stCard = String(C1Num);
    dCard1 = cards[stCard];
  } else if (String(C1Num) == 1) {
    Card1 = "Ace";
    dCard1 = cards["a"];
  } else if (String(C1Num) == 11) {
    Card1 = "Jack";
    dCard1 = cards["j"];
  } else if (String(C1Num) == 12) {
    Card1 = "Queen";
    dCard1 = cards["q"];
  } else if (String(C1Num) == 13) {
    Card1 = "King";
    dCard1 = cards["k"];
  }

  //card 2 determination
  if (C2Num <= 10) {
    stCard2 = String(C2Num);
    dCard2 = cards[stCard2];
  } else if (String(C2Num) == 1) {
    stCard2 = "Ace";
    dCard2 = cards["a"];
  } else if (String(C2Num) == 11) {
    stCard2 = "Jack";
    dCard2 = cards["j"];
  } else if (String(C2Num) == 12) {
    stCard2 = "Queen";
    dCard2 = cards["q"];
  } else if (String(C2Num) == 13) {
    stCard2 = "King";
    dCard2 = cards["k"];
  }
  let dealerPoints = dCard1 + dCard2;
  return [dealerPoints, Card1, stCard2];
}

function hitCards() {
    //selecting a random number for card 1
    let C1Num = Math.floor(Math.random() * 13) + 1;
    //selecting a random number for card 2
    let C2Num = Math.floor(Math.random() * 13) + 1;
    // assigning card 1 number to a card
    if (C1Num <= 10 && C1Num != 1) {
      Card1 = String(C1Num);
      stCard = String(C1Num);
      dCard1 = cards[stCard];
    } else if (String(C1Num) == 1) {
      Card1 = "Ace";
      dCard1 = cards["a"];
    } else if (String(C1Num) == 11) {
      Card1 = "Jack";
      dCard1 = cards["j"];
    } else if (String(C1Num) == 12) {
      Card1 = "Queen";
      dCard1 = cards["q"];
    } else if (String(C1Num) == 13) {
      Card1 = "King";
      dCard1 = cards["k"];
    }
  
    //card 2 determination
    if (C2Num <= 10) {
      stCard2 = String(C2Num);
      dCard2 = cards[stCard2];
    } else if (String(C2Num) == 1) {
      stCard2 = "Ace";
      dCard2 = cards["a"];
    } else if (String(C2Num) == 11) {
      stCard2 = "Jack";
      dCard2 = cards["j"];
    } else if (String(C2Num) == 12) {
      stCard2 = "Queen";
      dCard2 = cards["q"];
    } else if (String(C2Num) == 13) {
      stCard2 = "King";
      dCard2 = cards["k"];
    }
    let dealerPoints = dCard1 + dCard2;
    return [dCard1, Card1,dCard2, stCard2];
  }
  

function playBlackJack() {
  console.log(
    "Welcome to Blackjack, This is double exposure blackjack so the dealer wins on a push "
  );

  cardSt=''
  // initializing the dealers hand
  let dealerH = dealerHand();
  let dPoints = dealerH[0];
  let dCard1 = dealerH[1];
  let dCard2 = dealerH[2];

  // initializing the users hand
  let userH = userHand();
  let uPoints = userH[0];
  let uCard1 = userH[1];
  let uCard2 = userH[2];
// initializing the cards to hit with
let hitC=hitCards()
let userHval=hitC[0]
let userHcard=hitC[1]
let dealerHval=hitC[2]
let dealerHcard=hitC[3]

// console.log(userHcard)
// console.log(userHval)
// console.log(dealerHcard)
// console.log(dealerHval)


  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(`Would you like to start the game?: (y/n) \n`, (userInput) => {
    if (userInput === "y") {
        let playAgain='y'
      console.log(
        "Welcome to Blackjack, This is double exposure blackjack so the dealer wins on a push "
      );
    } else {
      console.log("Okay come back later!");
      exit();
    }

    rl.question(`How much money are you starting with? \n`, (userMoney) => {
      console.log(`You are starting with $${userMoney}`);

      rl.question(`How much would you like to bet\n`, (userBet) => {
        if (Number(userBet) > Number(userMoney)) {
          console.log(
            "Sorry you can not bet more money than you have\nPlease start over"
          );
          exit();
        } else {
          console.log(`You are betting $${userBet}. `);
        }
         console.log(
   `The dealer is showing the cards ${dCard1} and ${dCard2} and has ${dPoints} points.`
   );
   console.log(`You are showing ${uCard1} and ${uCard2} and have ${uPoints} `)
   rl.question(`Would you like to hit or stay? (h/s) \n`, (hitOrStay)=>{
    if (hitOrStay==='h'){
        do{ cardHit=hitCards()
            uPoints+=cardHit[0]
            cardSt+=cardHit[1]
            console.log(`You have a score of ${uPoints} and are showing the cards ${cardSt}.\nThe dealer has a score of ${dPoints} `)
            rl.question(`Would you like to hit or stay? (h/s) \n`, (hitOrStay)=>{})
        }while (hitOrStay==='h')
    
    }
   })
      });
    });
  });

  //   console.log(
  //     `The dealer is showing the cards ${dCard1} and ${dCard2} and has ${dPoints} points.`
  //   );
}
``;

playBlackJack();
