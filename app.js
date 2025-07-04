let playerScore = 0;
let computerScore = 0;
let number = 0; //게임 횟수
const totalGameNum = 10;

const playerScoreEl = document.querySelector(".player_score");
const computerScoreEl = document.querySelector(".computer_score");
const remainingNum = document.querySelector(".remainingNum");
const choiceBox = document.querySelector(".choiceBox");
const scissorBtn = document.querySelector(".scissors");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const resultText = document.querySelector(".result");
const h2 = document.querySelector("h2");
const restartBtn = document.querySelector(".restart_btn");

const playGame = () => {
  const playerOption = [scissorBtn, rockBtn, paperBtn];
  const computerOption = ["가위", "바위", "보"];

  playerOption.forEach((option) => {
    option.addEventListener("click", () => {
      let randomIndex = Math.floor(Math.random() * 3);
      let computerChoice = computerOption[randomIndex];
      let remainingNumValue = totalGameNum - number;
      //무승부 일경우
      if (option.innerText === computerChoice) {
        resultText.classList.remove("hidden");
        resultText.innerText = `무승부`;
        number++;
        remainingNum.innerText = `남은수 : ${remainingNumValue}`;
      }
      //플레이어 가위선택시 승리여부
      else if (option.innerText === "가위") {
        if (computerChoice === "보") {
          resultText.classList.remove("hidden");
          resultText.innerText = `You win `;
          number++;
          playerScore++;
          playerScoreEl.innerText = playerScore;
          remainingNum.innerText = `남은수 : ${remainingNumValue}`;
        } else {
          resultText.classList.remove("hidden");
          resultText.innerText = `You lose `;
          number++;
          computerScore++;
          computerScoreEl.innerText = computerScore;
          remainingNum.innerText = `남은수 : ${remainingNumValue}`;
        }
      }
      //플레이어 바위선택시 승리여부
      else if (option.innerText === "바위") {
        if (computerChoice === "가위") {
          resultText.classList.remove("hidden");
          resultText.innerText = `You win `;
          number++;
          playerScore++;
          playerScoreEl.innerText = playerScore;
          remainingNum.innerText = `남은수 : ${remainingNumValue}`;
        } else {
          resultText.classList.remove("hidden");
          resultText.innerText = `You lose `;
          number++;
          computerScore++;
          computerScoreEl.innerText = computerScore;
          remainingNum.innerText = `남은수 : ${remainingNumValue}`;
        }
      }
      //플레이어 보선택시 승리여부
      else if (option.innerText === "보") {
        if (computerChoice === "바위") {
          resultText.classList.remove("hidden");
          resultText.innerText = `You win `;
          number++;
          playerScore++;
          playerScoreEl.innerText = playerScore;
          remainingNum.innerText = `남은수 : ${remainingNumValue}`;
        } else {
          resultText.classList.remove("hidden");
          resultText.innerText = `You lose `;
          number++;
          computerScore++;
          computerScoreEl.innerText = computerScore;
          remainingNum.innerText = `남은수 : ${remainingNumValue}`;
        }
      }

      //남은횟수가 0일때 게임 종료
      if (remainingNumValue === 0) {
        finishGame();
      }
    });
  });
};

const finishGame = () => {
  //플레이어 승리시 승리문구 출력

  if (playerScore > computerScore) {
    h2.innerText = `게임 종료 !`;
    remainingNum.classList.add("hidden");
    choiceBox.classList.add("hidden");
    restartBtn.style.display = "block";
    resultText.innerText = `🎉 게임에서 이겼습니다!`;
  } else if (playerScore === computerScore) {
    h2.innerText = `게임 종료 !`;
    remainingNum.classList.add("hidden");
    choiceBox.classList.add("hidden");
    restartBtn.style.display = "block";
    resultText.innerText = `❤️ 게임에서 비겼습니다 !`;
  } else {
    h2.innerText = `게임 종료 !`;
    remainingNum.classList.add("hidden");
    choiceBox.classList.add("hidden");
    restartBtn.style.display = "block";
    resultText.innerText = `😣 게임에서 졌습니다`;
  }
};

playGame();

restartBtn.addEventListener("click", () => {
  window.location.reload();
});
