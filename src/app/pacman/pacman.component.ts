import { Component } from '@angular/core';
import { GameService } from '../service/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacman',
  standalone: true,
  imports: [],
  templateUrl: './pacman.component.html',
  styleUrl: './pacman.component.css'
})
export class PacmanComponent {
  constructor(private games :GameService, private router: Router){}
  endGame(){
    this.router.navigate(['/home']);
  }
}
