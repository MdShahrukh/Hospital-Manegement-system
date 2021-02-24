import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HospitalViewComponent } from './components/hospital-view/hospital-view.component';
import { DepartmentViewComponent } from './components/department-view/department-view.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppService } from './@core/app.service';
import { HospitalService } from './service/hospital.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HospitalViewComponent,
    DepartmentViewComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [AppService, HospitalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
