import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IllnessPatternsUI';

  isLoggedIn: boolean = false;

  constructor(private router: Router){
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd){
        if(router.url != '/login' && router.url != '/register'){
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      }
    })
  }

  ngOnInit(){
    
  }

}
