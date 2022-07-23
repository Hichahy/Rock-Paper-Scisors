// const handOptions = {
//     "rock": "images/rock.png",
//     "paper": "images/paper.png",
//     "scissors": "images/scissors.png",
// }

let SCORE = 0;

const pickUserHand = (hand) => {
  console.log(hand);
  //hide the current page
  let hands = document.querySelector(".hands");
  hands.style.display = "none";
  //show the next page with hand you picked
  let contest = document.querySelector(".contest");
  contest.style.display = "flex";
  //set user pick
  document.getElementById("userPickImg").src = `images/${hand}.png`;
  // document.getElementById("userPickImg").src = handOptions[hand]
  let cpHand = pickComputerHnad();

  //show referee after 3s
  setTimeout(() => {
    let showReferee = document.querySelector(".referee");
    showReferee.style.display = "flex";
    referee(hand, cpHand);
  }, 3000);
};

const handleModal = () => {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("modalOverlay");
  modal.style.display = "flex";
  overlay.style.display = "block";
};

const closeModal = () => {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("modalOverlay");
  modal.style.display = "none";
  overlay.style.display = "none";
};

const pickComputerHnad = () => {
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * 3)];
  document.getElementById("pcPickImg").src = `images/${cpHand}.png`;
  return cpHand;
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE!");
    if (SCORE > 0) {
      setScore(SCORE - 1);
    }
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
    if (SCORE > 0) {
      setScore(SCORE - 1);
    }
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
    if (SCORE > 0) {
      setScore(SCORE - 1);
    }
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
};

const restartGame = () => {
  let hands = document.querySelector(".hands");
  hands.style.display = "flex";

  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let showReferee = document.querySelector(".referee");
  showReferee.style.display = "none";
};

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
};

const setScore = (score) => {
  SCORE = score;
  document.querySelector(".score h1").innerText = score;
};
