import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';


@Component({
  //selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      email: 'mark@getMaxListeners.com',
      contactPreference: 'Email',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/mark.png',
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      phoneNumber: 1212121221,
      contactPreference: 'phone',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/mary.png',
    },
    {
      id: 2,
      name: 'John',
      gender: 'Male',
      phoneNumber: 1212121221,
      contactPreference: 'phone',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/john.png',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
