import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }
  games = [
    {
      id: 'tic-tac-toe',
      name: 'Tic Tac Toe',
      image: 'assets/game image/tic-tac-toe.png',
    },
    {
      id: 'rock-paper-scissor',
      name: 'Rock Paper Scissor',
      image: 'assets/game image/rock-paper-scissor.jpg',
    },
    {
      id: 'pacman',
      name: 'Pacman',
      image: 'assets/game image/pacman.jpg',
    },
    {
      id: 'snake-ladder',
      name: 'Snake Ladder',
      image: 'assets/game image/snake ladder.png',
    },
  ];
  rockPaperScissor =[
    {
      name: 'rock',
      image: '/assets/game image/rock.png',
    },
    {
      name: 'paper',
      image: '/assets/game image/paper.png',
    },
    {
      name: 'scissors',
      image: '/assets/game image/scissor.png',
    }
  ]
  snakeLadder =[
    {
      name: 'board',
      image: '/assets/game image/snake-board.png',
    }   
  ]
  snakeLadderChoice=[
    {
      name: 'red',
      image: '/assets/game image/red.png',
    },
    {
      name: 'yellow',
      image: '/assets/game image/yellow.png',
    }
  ]
  snakeLadderDice: string[] = [
    'assets/game image/dice1.png',
    'assets/game image/dice2.png',
    'assets/game image/dice3.png',
    'assets/game image/dice4.png',
    'assets/game image/dice5.png',
    'assets/game image/dice6.png'
  ];
  dicepng=['assets/game image/dice.png']
  
}
