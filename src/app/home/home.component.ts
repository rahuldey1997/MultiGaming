import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  searchValue: string="";
  games: any[] = [];
  filteredGames: any[] = [];
  notFound: boolean=false;
  constructor(private route: ActivatedRoute, private gameService: GameService) {}
  ngOnInit() {
    this.games = this.gameService.games;
    this.filteredGames = this.gameService.games
  }
  onSearch(): void {
    const searchResult = this.games.filter(game =>
      game.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
    
    if (searchResult.length === 0) {
      this.filteredGames = this.games;
    } else {
      this.filteredGames = searchResult;
    }
    if(searchResult.length === 0 && this.searchValue!=""){
        this.notFound=true;
    }
    else{
      this.notFound=false;
    }
  }
  
}
