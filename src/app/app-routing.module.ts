import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PatientDataComponent } from './components/patient-data/patient-data.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientComponent } from './components/patients/components/patient/patient.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'patient-data', component: PatientDataComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'patient/:id', component: PatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
