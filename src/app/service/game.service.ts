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
    }
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
}
