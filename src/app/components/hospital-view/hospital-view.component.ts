import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hospital } from 'src/app/models/hospital';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-hospital-view',
  templateUrl: './hospital-view.component.html',
  styleUrls: ['./hospital-view.component.css'],
})
export class HospitalViewComponent implements OnInit {
  hospitalList: Hospital[];
  hospital: Hospital;
  isEditing: boolean;
  constructor(private hospitalService: HospitalService, private router: Router) {}

  ngOnInit(): void {
    this.hospital = new Hospital();
    this.hospitalService.getHospitalList().subscribe((data: Hospital[]) => {
      this.hospitalList = data;
    });
  }

  addNewHospital(data) {
    if (!this.isEditing) {
      if (data && data.hospitalname.trim() && data.contactnumber.trim()) {
        data.id =
          this.hospitalList[this.hospitalList.length - 1].id + 1;
        this.hospitalList.push(data);
      }
    } else {
      const existingHosp = this.hospitalList.findIndex((h) => h.id === data.id);
      this.hospitalList[existingHosp] = data;
      this.isEditing = false;
    }
  }

  deleteHospital(data) {
    this.hospitalList = this.hospitalList.filter(
      (h) =>
        h.hospitalname !== data.hospitalname &&
        h.contactnumber !== data.contactnumber
    );
  }

  view() {
    this.router.navigate(['/departments'])
  }

  edit(data) {
    this.hospital = JSON.parse(JSON.stringify(data));
    this.isEditing = true;
  }

  sortByName() {
    const data = this.hospitalList.sort(function (a, b) {
      var x = a.hospitalname.toLowerCase();
      var y = b.hospitalname.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }
}
