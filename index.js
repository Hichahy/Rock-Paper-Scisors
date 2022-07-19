// const handOptions = {
//     "rock": "images/rock.png",
//     "paper": "images/paper.png",
//     "scissors": "images/scissors.png",
// }

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
};

const pickComputerHnad = () => {
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * 3)];
  document.getElementById("pcPickImg").src = `images/${cpHand}.png`;
  return cpHand;
};
