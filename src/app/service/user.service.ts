import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor() { }
   users = [
    { name: 'Rahul Dey', username: 'rahulDey', password: 'rahul123' },
    { name: 'Soham Ganguly', username: 'sohamGanguly', password: 'soham123' },
    { name: 'Sourav Roy', username: 'souravRoy', password: 'sourav123' },
    { name: 'Ritadhi Roy', username: 'ritadhiRoy', password: 'ritun123' },
    { name: 'Riya Ghosh', username: 'riyaGhosh', password: 'riya123' }
  ];
  getUsers() {
    return this.users;
  }
}
