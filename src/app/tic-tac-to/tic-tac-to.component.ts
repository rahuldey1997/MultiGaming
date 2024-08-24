import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tic-tac-to',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tic-tac-to.component.html',
  styleUrl: './tic-tac-to.component.css'
})
export class TicTacToComponent {
  player: boolean = true;
  playerO:string = "";
  playerX:String = "";
  isDraw: boolean = false;
  drawStatement: string = "The Game Is Draw"
  winStatement: string = "The winner is";
  idx!: number;
   turnO: boolean = false;
   winner: any;
   pos1:any;
   pos2:any;
   pos3:any;
   win: boolean = false;
   errorMessage: any;
  
   constructor(private router: Router) {} 
   winPattern: any = [
    [0,1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7],
    [3, 4, 5], [6, 7, 8],  [2, 5, 8], [2, 4, 6]
  ]
  boxes = Array(9).fill('')
  checkWinner() {
    for (let pattern of this.winPattern) {
      this.pos1 = this.boxes[pattern[0]];
      this.pos2 = this.boxes[pattern[1]];
      this.pos3 = this.boxes[pattern[2]];

      if (this.pos1 !== "" && this.pos2 !== "" && this.pos3 !== "") {
        if (this.pos1 === this.pos2 && this.pos1 === this.pos3) {
            if(this.pos1=='X'){
               this.winner=this.playerX
            }
            else{
              this.winner=this.playerO
            }
          this.win = true;
          return;
        }
      }
    }
    if (!this.boxes.includes("") && !this.win) {
      this.isDraw = true;
    }
  }
  setInnerText(event:any,index: number) {
    this.idx = index;
    if(this.turnO==true && this.boxes[index]== "" ){
      this.boxes[index] = 'O';
      this.turnO = false;
    }
    if(this.turnO==false && this.boxes[index]== "" ){
      this.boxes[index] = 'X';
      this.turnO = true;
    }
   this.checkWinner()
  }
  reset(){
    this.boxes = Array(9).fill('');
    this.turnO = false;
    this.winner = "";
    this.win = false;
    this.isDraw = false;
  }
  endGame() {
    this.router.navigate(['/home']);
    }
    submitPlayer(){
      if(this.playerO !="" && this.playerX !="")
      {
        this.player = false
      }
      else{
        this.errorMessage = "Kindly Fill Up The Input Field"
      }
    }
    closeModal(){
      this.router.navigate(['/home']);
    }
}
