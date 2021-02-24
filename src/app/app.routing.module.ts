import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentViewComponent } from './components/department-view/department-view.component';
import { HospitalViewComponent } from './components/hospital-view/hospital-view.component';

const routes: Routes = [
    { path: "", redirectTo: "/hostpitals", pathMatch: "full" },
    {path: 'hostpitals', component: HospitalViewComponent},
    {path: 'departments', component: DepartmentViewComponent},
    {path: '**', component: HospitalViewComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
