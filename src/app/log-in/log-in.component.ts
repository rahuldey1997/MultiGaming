import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent  {
  
  name:string="";
  username: string = '';
  password: string = '';
  errorMessage: any;
  Users: any = [];
  loggedIn: boolean = false;
  constructor(private router: Router, private users: UserService) {}
 
  onSubmit(): void {
    const Users = this.users.getUsers();
    const user = Users.find(u => u.username === this.username && u.password === this.password);
    if (user) {
      this.loggedIn = true;
      this.name=user.name;
      this.username=user.username
      sessionStorage.setItem('isloggedIn', "true");
      sessionStorage.setItem('name', this.name);
      // this.router.navigate(['/home']);
      window.location.href = '/home'
    } else {
      this.loggedIn = false;
      this.errorMessage = 'Invalid username or passhrase';
    }
  }
}