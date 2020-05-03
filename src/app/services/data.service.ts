import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
  });

  options = {
    headers: this.headers
  }

  constructor(private http: HttpClient) { }

  getPatients(){
    return this.http.get('/api/patients/getPatients', this.options);
  }

  getPatient(id){
    let params = new HttpParams().set('id', id);
    let options = { headers: this.headers, params };
    return this.http.get('/api/patients/getPatient', options);
  }

  sendDiagnosis(body){
    return this.http.post('/api/patients/sendDiagnosis', body, this.options);
  }

  search(body){
    return this.http.post('/api/patients/patientSearch', body, this.options);
  }
}
