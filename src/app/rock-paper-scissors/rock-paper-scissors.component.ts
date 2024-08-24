import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rock-paper-scissors',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rock-paper-scissors.component.html',
  styleUrl: './rock-paper-scissors.component.css'
})
export class RockPaperScissorsComponent implements OnInit{
  choices: any[] = [];
  idx:any;
  player:string="";
  computer:string="Jarvis";
  playerScore:number=0;
  compScore:number=0;
  randomNum:any;
  userChoice:any;
  compChoice:any;
  localWin:string="Play Your Moves";
  globalWin:any;
  numberOfTrial:number=5;
  count:number=0;
  gameStart:boolean=false;
  errorMessage:any;
  gameEnd:boolean=false;
  win:boolean=false;
  draw:boolean=false;
  winStatement:string="The winner is "
  drawStatement:string="The game has been drawn."


  options:string[]=['Stone', 'Paper', 'Scissor']
  constructor(private games :GameService, private router: Router){}
  ngOnInit() {
    this.choices=this.games.rockPaperScissor
  }
 
  chooseOption(event:any,index: number){
    this.idx=index;
    this.getRandomNumber();
    this.localWinner()
  }
  
  getRandomNumber(){
    this.randomNum = (Math.floor(Math.random()*10000)%101)%3 ;
    console.log(this.randomNum)
  }
  localWinner(){
    this.userChoice=this.options[this.idx]
    this.compChoice=this.options[this.randomNum]
    if(this.userChoice=='Stone' && this.compChoice=='Paper' ||
    this.userChoice=='Scissor' && this.compChoice=='Stone' ||
    this.userChoice=='Paper' && this.compChoice=='Scissor'){
      this.compScore++;
      this.localWin=this.computer+"Win"
      this.count--;
    }
    else if(this.userChoice=='Stone' && this.compChoice=='Scissor' ||
    this.userChoice=='Paper' && this.compChoice=='Stone'||
    this.userChoice=='Scissor' && this.compChoice=='Paper'
    ){
      this.playerScore++;
      this.localWin=this.player +"Win"
      this.count--
    }
    else{
      this.localWin="Draw"
      this.count--
    }

    if(this.count==0){
      this.gameEnd = true;
        if(this.compScore > this.playerScore){
          this.globalWin=this.computer
          this.win=true
        }
        else if(this.compScore < this.playerScore){
          this.globalWin=this.player
          this.win=true
        }
        else{
          this.globalWin= "Draw"
          this.draw=true
        }
    } 
    
  }
  reset(){
    this.playerScore=0;
    this.compScore=0;
    this.localWin="Play Your Moves";
    this.count=this.numberOfTrial;
    this.win=false;
    this.draw=false;
    this.gameEnd=false;

  }
  closeModal(){
    this.router.navigate(['/home']);
  }
  submitPlayer(){
    if(this.player !="" )
    {
      this.gameStart=true;
      this.count=this.numberOfTrial
      console.log(this.count)
    }
    else{
      this.errorMessage = "Kindly Fill Up The Input Field"
    }
  }
  endGame(){
    this.router.navigate(['/home']);
  }
}


