import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { TicTacToComponent } from './tic-tac-to/tic-tac-to.component';
import { RockPaperScissorsComponent } from './rock-paper-scissors/rock-paper-scissors.component';
import { authGuard } from './routerguard/auth.guard';


export const routes: Routes = [
    {path: '', component: LogInComponent},
    {path: 'home', component:HomeComponent, canActivate: [authGuard]},
    {path: 'tic-tac-toe', component: TicTacToComponent, canActivate: [authGuard]},
    {path: 'rock-paper-scissor', component: RockPaperScissorsComponent, canActivate: [authGuard]}
];
