import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientData;
  diagnosis;
  sentDiagnosis: boolean = false;

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let patientDataID = this.route.snapshot.params.id;
    this.data.getPatient(patientDataID).subscribe(patientData => this.patientData = patientData);
  }

  sendDiagnosis(id){
    let body = { diagnosis: this.diagnosis, id };
    this.data.sendDiagnosis(body).subscribe(res => {
      this.sentDiagnosis = true;
    });
  }

}
