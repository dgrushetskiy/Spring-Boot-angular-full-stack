import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Student } from 'src/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students!: Student[] ;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllStudents().subscribe((data: any)=>{  
      //console.log(data);  
      
      this.students = data;  
      console.log(this.students);
    })      
  }

  public deleteStudent(id: number){
    console.log("id = ", id);
    this.apiService.deleteStudent(id).subscribe(data => console.log(data), error => console.log(error)); 
    
  }

}
