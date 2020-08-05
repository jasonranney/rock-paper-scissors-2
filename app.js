const game = () => {
  let pScore = 0;
  let cScore = 0;

  // Start the game
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const intro = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      intro.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };

  // Play a match
  const playMatch = () => {
    const computerOptions = ['rock', 'paper', 'scissors'];
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach((hand) => {
      hand.addEventListener('animationend', function () {
        this.style.animation = '';
      });
    });

    options.forEach((option) => {
      option.addEventListener('click', function () {
        // Computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          // Compare hands
          compareHands(this.textContent, computerChoice);

          // Update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        // Animation
        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector('.winner');

    // Check for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = `It's a tie`;
      return;
    }

    // Check for winner
    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      // Player wins
      winner.textContent = 'Player Wins';
      pScore++;
    } else {
      // Computer wins
      winner.textContent = 'Computer Wins';
      cScore++;
    }

    updateScore();
  };

  // Call all the inner functions
  startGame();
  playMatch();
};

// Start the game
game();
