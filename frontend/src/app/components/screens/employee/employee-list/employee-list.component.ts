import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  Employee:any = [];

  constructor(private apiService: ApiService) {
    this.readEmployee();
  }

  ngOnInit() {}

  readEmployee(){
    this.apiService.getEmployees().subscribe((employees) => {
     this.Employee = employees;
    })
  }

  removeEmployee(employee: Employee, index: number) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteEmployee(employee._id).subscribe((res: Response) => {
          this.Employee.splice(index, 1);
        }
      )
    }
  }

}
