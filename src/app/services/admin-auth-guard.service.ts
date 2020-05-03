import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AdminAuthGuardService {

  constructor(private authService: AuthService, private router: Router) { }
  
  canActivate(){
    let tokenPayload = this.authService.getTokenPayload();
    if(tokenPayload.admin == 1){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
