import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients;
  cols = [
    { field: 'firstname', header: 'First Name' },
    { field: 'surname', header:  'Surname' },
    { field: 'email', header: 'Email' },
    { field: 'action', header: 'Action' }
  ]

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getPatients().subscribe(patients => this.patients = patients);
  }

}
