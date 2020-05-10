import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  patientData;

  constructor(private data: DataService, private auth: AuthService) { }

  ngOnInit(): void {
    let patientID = this.auth.getTokenPayload().id;
    this.data.getPatient(patientID).subscribe(patientData => this.patientData = patientData);
  }

}
