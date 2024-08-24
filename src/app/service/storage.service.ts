import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { 
  }
  
  getName(){
    return sessionStorage.getItem("name");
  }
  getIslogIn(){
    return sessionStorage.getItem("isloggedIn");
  }
  }
