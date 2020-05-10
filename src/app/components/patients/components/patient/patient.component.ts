import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { StatisticsComponent } from '../statistics/statistics.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientData;
  searchResults;
  diagnosis;
  avgHR = 0;
  avgSystolic = 0;
  avgDiastolic = 0;
  avgWeight = 0;
  selectedFilters;
  sentDiagnosis: boolean = false;

  filters = [];

  constructor(private data: DataService, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    let patientDataID = this.route.snapshot.params.id;
    this.data.getPatient(patientDataID).subscribe((patientData: any[]) => {
      this.patientData = patientData;
      let i = 0;
      patientData.forEach(data => {
        this.avgHR += data.heartRate;
        this.avgSystolic += Number(data.bloodPressure.split('/')[0]);
        this.avgDiastolic += Number(data.bloodPressure.split('/')[1]);
        this.avgWeight += data.weight;
        i++;
      })
      this.avgHR = this.avgHR / i;
      this.avgSystolic = this.avgSystolic / i;
      this.avgDiastolic = this.avgDiastolic / i;
      this.avgWeight = this.avgWeight / i;
      this.filters.push({ label: `Average Heart Rate - ${Number(this.avgHR).toFixed(2)}`, value: `HR:${this.avgHR}` });
      this.filters.push({ label: `Average Blood Pressure - ${Number(this.avgSystolic).toFixed(1)}/${Number(this.avgDiastolic).toFixed(1)}`, value: `S:${this.avgSystolic}/D:${this.avgDiastolic}` });
      this.filters.push({ label: `Average Weight - ${Number(this.avgWeight).toFixed(2)}`, value: `W:${this.avgWeight}` });
    });
  }

  sendDiagnosis(id){
    let body = { diagnosis: this.diagnosis, id };
    this.data.sendDiagnosis(body).subscribe(res => {
      this.sentDiagnosis = true;
    });
  }

  searchPatients(){
    this.data.search({filters: this.selectedFilters }).subscribe(searchResults => this.searchResults = searchResults);
  }

  viewStatistics(){
    let statistics = this.dialog.open(StatisticsComponent, {
      width: '800px',
      height: '480px',
      data: {
        patientData: this.patientData
      }
    })
  }

}
