import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PatientDataComponent } from './components/patient-data/patient-data.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientComponent } from './components/patients/components/patient/patient.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'patient-data', component: PatientDataComponent, canActivate: [AuthGuardService] },
  { path: 'patients', component: PatientsComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
  { path: 'patient/:id', component: PatientComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
