import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { Student } from '../shared/student';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})

export class ViewStudentComponent implements OnInit {
  student: Student;  // Define FormGroup to student's edit form
  
  constructor(
    private crudApi: CrudService,
    private location: Location,
    private actRoute: ActivatedRoute,
  ){ }

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    this.crudApi.GetStudent(id).valueChanges().subscribe(data => {
      this.student = data;  // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form 
    })
  }

  // Go back to previous component
  goBack() {
    this.location.back();
  }

}