import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { TicTacToComponent } from './tic-tac-to/tic-tac-to.component';
import { RockPaperScissorsComponent } from './rock-paper-scissors/rock-paper-scissors.component';
import { authGuard } from './routerguard/auth.guard';
import { SnakeComponent } from './snake/snake.component';
import { PacmanComponent } from './pacman/pacman.component';


/*export const routes: Routes = [
    {path: '', component: LogInComponent},
    {path: 'home', component:HomeComponent, canActivate: [authGuard]},
    {path: 'tic-tac-toe', component: TicTacToComponent, canActivate: [authGuard]},
    {path: 'rock-paper-scissor', component: RockPaperScissorsComponent, canActivate: [authGuard]},
    {path: 'pacman', component: PacmanComponent, canActivate: [authGuard]},
    {path: 'snake-ladder', component:  SnakeComponent, canActivate: [authGuard]}
];*/

export const routes: Routes = [
  { 
    path: '', 
    component: LogInComponent 
  },

  { 
    path: 'home', 
    canActivate: [authGuard],
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) 
  },

  { 
    path: 'tic-tac-toe', 
    canActivate: [authGuard],
    loadComponent: () => import('./tic-tac-to/tic-tac-to.component').then(m => m.TicTacToComponent) 
  },

  { 
    path: 'rock-paper-scissor', 
    canActivate: [authGuard],
    loadComponent: () => import('./rock-paper-scissors/rock-paper-scissors.component').then(m => m.RockPaperScissorsComponent) 
  },

  { 
    path: 'pacman', 
    canActivate: [authGuard],
    loadComponent: () => import('./pacman/pacman.component').then(m => m.PacmanComponent) 
  },

  { 
    path: 'snake-ladder', 
    canActivate: [authGuard],
    loadComponent: () => import('./snake/snake.component').then(m => m.SnakeComponent) 
  }
];

