import { Component, OnInit } from '@angular/core';
import { BluetoothService } from 'src/app/services/bluetooth.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.css']
})
export class PatientDataComponent implements OnInit {

  symptom;
  symptoms = [];
  disease;
  diseases = [];
  panelOpenState: boolean = false;

  constructor(private bluetooth: BluetoothService, private auth: AuthService) { }

  ngOnInit(): void {
    this.bluetooth.stream()
      .subscribe((value) => console.log(value), error => console.log(error));
  }

  get device() {
    return this.bluetooth.getDevice();
  }

  requestValue(form) {
    this.bluetooth.value(form)
      .subscribe(() => null, error => console.log(error));
  }

  disconnect(){
    this.bluetooth.disconnectDevice();
  }

  addSymptom(){
    if(this.symptom != ''){
      this.symptoms.push(this.symptom);
      this.symptom = '';
    }
  }

  addDisease(){
    if(this.disease != ''){
      this.diseases.push(this.disease);
      this.disease = '';
    }
  }

  deleteSymptom(symptom){
    this.symptoms.splice(this.symptoms.indexOf(symptom), 1);
  }

  deleteDisease(disease){
    this.diseases.splice(this.diseases.indexOf(disease), 1);
  }

  sendData(form){
    form.symptoms = this.symptoms;
    form.diseases = this.diseases;
    form.patientID = this.auth.getTokenPayload().id;
    
    delete form.symptom;
    delete form.disease;
    
    this.requestValue(JSON.stringify(form));
  }

}
