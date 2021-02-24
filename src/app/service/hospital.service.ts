import { Injectable } from '@angular/core';
import { AppService } from '../@core/app.service';

const actionUrls = {
  hospitalListUrl: 'assets/mockdata/hospitals.json',
  departmentListUrl: 'assets/mockdata/departments.json',
};

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  constructor(private appService: AppService) {}

  getHospitalList() {
    return this.appService.getAction(actionUrls.hospitalListUrl);
  }

  getDepartmentList() {
    return this.appService.getAction(actionUrls.departmentListUrl);
  }
}
