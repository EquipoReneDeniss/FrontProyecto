import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AUTHService {
  loggedUserId: number = 0;
  isLoggedUser: boolean = false;

  logOut(): void {
    localStorage.removeItem("userId");
  }

  saveUserId(id: number): void {
    const userId = localStorage.getItem("userId");
    if (userId) {
      localStorage.removeItem("userId");
      localStorage.setItem("userId", JSON.stringify(id))
    } else {
      localStorage.setItem("userId", JSON.stringify(id))
    }
  }

  readUserId(): void {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      this.router.navigate(['/login/'])
    } else {
      
      this.loggedUserId = JSON.parse(userId);
      this.isLoggedUser = true;
      
      console.warn(this.loggedUserId);
    }
  }

  constructor(
    private router: Router
  ) { }
}
