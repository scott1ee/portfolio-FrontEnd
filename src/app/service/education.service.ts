import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiUrl = 'http://localhost:8080/education/traer';

  constructor(private http: HttpClient) { }

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.apiUrl);
  }
}
