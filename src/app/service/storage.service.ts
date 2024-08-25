import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  getName(){
    return sessionStorage.getItem("name");
  }
  getIslogIn(){
    return sessionStorage.getItem("isloggedIn");
  }
  }
