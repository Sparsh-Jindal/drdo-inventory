import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:8080/api/project';

  displayAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl);
  }

  addProject(data: Project): Observable<Project> {
    return this.http.post<Project>(this.baseUrl + '/insert', data);
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/${id}`);
  }

  updateProject(id: number, project: Project): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, project);
  }
}
