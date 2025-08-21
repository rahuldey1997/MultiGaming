import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snake',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {

  playerColor: string = "";
  player: string = "";
  opponentPlayer = 'Jarvis';
  opponentColor: string = "";
  statement:string=", it's your move now"
  currentPlayerName: string = ""; // whose turn (player or opponent)
  currentPlayerColor: string = ""; // red or yellow
  winner: string = "";
  winStatement:string="Congratulation the winner is "
  gameStart: boolean = false;
  gameOver: boolean = false;
  yourTurn: boolean = false;
  errorMessage: any;

  dice: any;
  display_dice: any;
  dicepng: any;
  board: any;
  boardImage: any;
  cells: number[] = [];
  choice: any;

  rewardMap: { [key: number]: number } = {
    9: 27, 16: 7, 18: 37, 25: 54, 28: 51,
    56: 64, 59: 17, 63: 19, 67: 30, 68: 88,
    76: 97, 79: 100, 87: 24, 93: 69, 95: 75, 99: 77
  };

  playerPositions: { [key: string]: { position: number; canMove: boolean } } = {};

  constructor(private games: GameService, private router: Router) {}

  ngOnInit(): void {
    this.dice = this.games.snakeLadderDice;
    this.board = this.games.snakeLadder;
    if (this.board && this.board.length > 0) this.boardImage = this.board[0].image;
    this.choice = this.games.snakeLadderChoice;
    this.dicepng = this.games.dicepng;

    this.cells = [];
    let num = 100;
    for (let row = 0; row < 10; row++) {
      let rowCells: number[] = [];
      for (let col = 0; col < 10; col++) rowCells.push(num--);
      if (row % 2 === 1) rowCells.reverse();
      this.cells.push(...rowCells);
    }
  }

  rollDelay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async applyReward(player: any) {
    const reward = this.rewardMap[player.position];
    if (reward && reward !== player.position) {
      await this.rollDelay(500);
      player.position = reward;
      await this.rollDelay(500);
    }
  }

  async rollDice() {
    if (this.gameOver || !this.yourTurn) return;

    const player = this.playerPositions[this.currentPlayerName];
    const roll = Math.floor(Math.random() * 6) + 1;
    this.display_dice = this.dice[roll - 1];

    await this.rollDelay(500);

    // First move logic: canMove only after rolling 1
    if (!player.canMove) {
      if (roll === 1) {
        player.canMove = true;
        player.position = 1;
        await this.applyReward(player);
      } else {
        this.switchToOpponent();
        return;
      }
    } else {
      let newPos = player.position + roll;
      if (newPos <= 100) player.position = newPos;
      await this.applyReward(player);
    }

    if (player.position === 100) {
      this.gameOver = true;
      this.winner = this.player;
      return;
    }

    if (roll === 1) {
      this.yourTurn = true; // extra turn
    } else {
      this.switchToOpponent();
    }
  }

  async opponentMove() {
    if (this.gameOver) return;

    const opponent = this.playerPositions[this.currentPlayerName];
    const roll = Math.floor(Math.random() * 6) + 1;
    this.display_dice = this.dice[roll - 1];

    await this.rollDelay(500);

    if (!opponent.canMove) {
      if (roll === 1) {
        opponent.canMove = true;
        opponent.position = 1;
        await this.applyReward(opponent);
      } else {
        this.switchToPlayer();
        return;
      }
    } else {
      let newPos = opponent.position + roll;
      if (newPos <= 100) opponent.position = newPos;
      await this.applyReward(opponent);

      if (opponent.position === 100) {
        this.gameOver = true;
        this.winner = this.opponentPlayer;
        return;
      }
    }

    if (roll === 1) {
      await this.rollDelay(500);
      await this.opponentMove(); // extra turn
    } else {
      this.switchToPlayer();
    }
  }

  switchToOpponent() {
    this.currentPlayerName = this.opponentPlayer;
    this.currentPlayerColor = this.choice.find((c: any) => c.name === this.currentPlayerName)?.color;
    this.yourTurn = false;
    setTimeout(() => this.opponentMove(), 500);
  }

  switchToPlayer() {
    this.currentPlayerName = this.player;
    this.currentPlayerColor = this.choice.find((c: any) => c.name === this.currentPlayerName)?.color;
    this.yourTurn = true;
  }

  submitPlayer() {
    if (!this.player || !this.playerColor) {
      this.errorMessage = "Kindly Fill Up The Input Field and choose color";
      return;
    }

    this.opponentColor = this.playerColor === 'red' ? 'yellow' : 'red';

    this.choice[0].name = this.playerColor === 'red' ? this.player : this.opponentPlayer;
    this.choice[0].color = 'red';
    this.choice[1].name = this.playerColor === 'yellow' ? this.player : this.opponentPlayer;
    this.choice[1].color = 'yellow';

    // Initialize positions
    this.choice.forEach((c: { name: string | number; }) => this.playerPositions[c.name] = { position: 0, canMove: false });

    this.gameStart = true;
    this.errorMessage = "";

    // Decide first turn
    this.currentPlayerName = this.playerColor === 'red' ? this.player : this.opponentPlayer;
    this.currentPlayerColor = this.choice.find((c: { name: string; }) => c.name === this.currentPlayerName)?.color;

    if (this.currentPlayerName === this.opponentPlayer) {
      this.yourTurn = false;
      setTimeout(() => this.opponentMove(), 500);
    } else {
      this.yourTurn = true;
    }
  }

  reset() {
    // Reset all player positions canMove only
    this.choice.forEach((c: { name: string | number }) => {
        this.playerPositions[c.name].canMove = false;
    });

    this.display_dice = false;
    this.gameOver = false;

    // Determine whose turn next based on last player
    if (this.currentPlayerName === this.opponentPlayer) {
        // Last turn was opponent → player starts
        this.currentPlayerName = this.player;
        this.currentPlayerColor = this.choice.find((c: { name: string; }) => c.name === this.player)?.color;
        this.yourTurn = true;
    } else {
        // Last turn was player → opponent starts
        this.currentPlayerName = this.opponentPlayer;
        this.currentPlayerColor = this.choice.find((c: { name: string; }) => c.name === this.opponentPlayer)?.color;
        this.yourTurn = false;
        setTimeout(() => this.opponentMove(), 500);
    }
}


  endGame() {
    this.router.navigate(['/home']);
  }

  closeModal() {
    this.router.navigate(['/home']);
  }
}
