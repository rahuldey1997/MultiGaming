// import { CommonModule } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  title: string="Multigaming Platform"
  name:any;
  logged:boolean=false;
  logIn:any;
  constructor(private router: Router, private storage: StorageService) {
     
   } 
  ngOnInit() {
    this.name=this.storage.getName()
    this.logIn=this.storage.getIslogIn()
  }
  logOut() {
    this.logged=false;
    this.router.navigate(['']);
    this.logIn="false"
    sessionStorage.clear()
  }

}
