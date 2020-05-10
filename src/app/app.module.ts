import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth/src/public_api';
import { PatientDataComponent } from './components/patient-data/patient-data.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientComponent } from './components/patients/components/patient/patient.component';
import { TableModule } from 'primeng/table'
import { SidebarModule } from 'primeng/sidebar'
import { ButtonModule } from 'primeng/button'
import { MultiSelectModule } from 'primeng/multiselect';
import { StatisticsComponent } from './components/patients/components/statistics/statistics.component';
import { NgApexchartsModule } from "ng-apexcharts"

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    PatientDataComponent,
    PatientsComponent,
    PatientComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    WebBluetoothModule.forRoot({
      enableTracing: true
    }),
    MatExpansionModule,
    TableModule,
    SidebarModule,
    ButtonModule,
    MultiSelectModule,
    MatDialogModule,
    MatTabsModule,
    NgApexchartsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
