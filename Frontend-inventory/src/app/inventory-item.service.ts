import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { InventoryItem } from './inventory-item';

@Injectable({
  providedIn: 'root',
})
export class InventoryItemService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:8080/api/item';

  displayAllItems(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(this.baseUrl);
  }
  addItem(data: InventoryItem): Observable<InventoryItem> {
    return this.http.post<InventoryItem>(this.baseUrl + '/insert', data);
  }

  deleteItem(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/delete/${id}`);
  }

  getCondemnedItems(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(`${this.baseUrl}/condemned`);
  }

  getItemById(id: number): Observable<InventoryItem> {
    return this.http.get<InventoryItem>(`${this.baseUrl}/${id}`);
  }

  updateItem(id: number, item: InventoryItem): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, item);
  }
}
