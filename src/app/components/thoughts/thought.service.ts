import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thought } from './interface/thought';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly Api = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.Api);
  }

  create(data: Thought): Observable<Thought[]> {
    return this.http.post<Thought[]>(this.Api, data);
  }
}
