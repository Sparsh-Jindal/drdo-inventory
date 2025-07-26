import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loco } from './loco';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080/api/location';

  displayAllLocations(): Observable<Loco[]> {
    return this.http.get<Loco[]>(this.baseUrl);
  }

  addLocation(data: Loco): Observable<Loco> {
    return this.http.post<Loco>(this.baseUrl + '/insert', data);
  }
  getLocationById(id: number): Observable<Loco> {
    return this.http.get<Loco>(`${this.baseUrl}/${id}`);
  }

  updateLocation(id: number, location: Loco): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, location);
  }
}
