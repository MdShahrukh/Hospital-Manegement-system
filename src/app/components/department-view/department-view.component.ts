import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css'],
})
export class DepartmentViewComponent implements OnInit {
  departmentlist: Department[];
  department: Department;
  isEditing: boolean;
  constructor(private hospitalService: HospitalService, private router: Router) {}

  ngOnInit(): void {
    this.department = new Department();
    this.hospitalService.getDepartmentList().subscribe((data: Department[]) => {
      this.departmentlist = data;
    });
  }

  add(data: Department) {
    if (!this.isEditing) {
      if (
        data &&
        data.departmentname.trim() &&
        data.contactnumber.trim() &&
        data.head.trim()
      ) {
        data.id =
          this.departmentlist[this.departmentlist.length - 1].id + 1;
        this.departmentlist.push(data);
        console.log(this.departmentlist);
      }
    } else {
      const existingHosp = this.departmentlist.findIndex(
        (h) => h.id === this.department.id
      );
      data.id = this.department.id;
      this.departmentlist[existingHosp] = data;
      this.isEditing = false;
    }
  }

  delete(data) {
    this.departmentlist = this.departmentlist.filter(
      (h) =>
        h.hospitalname !== data.hospitalname &&
        h.contactnumber !== data.contactnumber
    );
  }

  view() {
    console.log('view');
  }

  edit(data) {
    this.department = JSON.parse(JSON.stringify(data));
    this.isEditing = true;
  }

  sortByName() {
    const data = this.departmentlist.sort(function (a, b) {
      var x = a.departmentname.toLowerCase();
      var y = b.departmentname.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }


  back() {
    this.router.navigate(['./hospitals']);
  }
}
