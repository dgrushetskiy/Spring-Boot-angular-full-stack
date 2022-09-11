import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Student } from 'src/student';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  student : Student=new Student();  
  ngOnInit(): void {

  }

  public registerNow(){
    this.apiService.createStudent(this.student).subscribe(data => console.log(data), error => console.log(error)); 
  }

}
