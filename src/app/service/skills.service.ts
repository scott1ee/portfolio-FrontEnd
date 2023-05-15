import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from '../models/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiUrl = 'http://localhost:8080/skills/traer';

  constructor(private http: HttpClient) { }

  getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.apiUrl);
  }
}
