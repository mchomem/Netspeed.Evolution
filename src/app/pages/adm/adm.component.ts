import { Component } from '@angular/core';
import { DepartmentComponent } from "../../components/adm/department/department.component";
import { EmployeeComponent } from '../../components/adm/employee/employee.component';

@Component({
  selector: 'app-adm',
  imports: [DepartmentComponent, EmployeeComponent],
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.css'
})
export class AdmComponent {

}
