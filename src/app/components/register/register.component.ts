import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  surname;
  firstname;
  email;
  password;
  repeatPassword;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(form){
    this.authService.register(form.value);
    this.router.navigate(['/login']);
  }

}
