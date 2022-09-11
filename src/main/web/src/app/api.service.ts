import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //private SERVER_URL = "http://localhost:8080/students";//This would through CORS error

  private SERVER_URL = "/students";//Using proxy.conf.json, this request will be redirected to "http://localhost:8080 host
  
  constructor(private httpClient: HttpClient) { }

  public getAllStudents(){  
    return this.httpClient.get(this.SERVER_URL);  
  }


  public createStudent(student: object): Observable<object> {  
    return this.httpClient.post(this.SERVER_URL, student);  
  }  

  public deleteStudent(id: number): Observable<object> {  
    return this.httpClient.delete(`${this.SERVER_URL}/${id}`);  
  }  
}
