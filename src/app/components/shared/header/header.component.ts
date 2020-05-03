import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  display;
  admin: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.getTokenPayload().admin == 1)
      this.admin = true;
  }

  logout(){
    this.authService.logout();
  }

}
