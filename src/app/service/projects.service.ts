import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from '../models/projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private apiUrl = 'http://localhost:8080/projects/traer';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.apiUrl);
  }
}
