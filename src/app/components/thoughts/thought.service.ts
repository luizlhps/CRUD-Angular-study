import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thought } from './interface/thought';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly Api = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  getAll(page: number, filter: string): Observable<Thought[]> {
    const itemsPerPage = 6;

    let params = new HttpParams()
      .set('_page', page)
      .set('_limit', itemsPerPage);

    if (filter.trim().length > 2) {
      console.log(filter.trim().length);

      params = params.set('q', filter);
    }

    return this.http.get<Thought[]>(this.Api, { params: params });
  }

  create(data: Thought): Observable<Thought[]> {
    return this.http.post<Thought[]>(this.Api, data);
  }

  delete(id: number): Observable<Thought> {
    const url = `${this.Api}/${id}`;
    return this.http.delete<Thought>(url);
  }

  findById(id: number): Observable<Thought> {
    const url = `${this.Api}/${id}`;
    return this.http.get<Thought>(url);
  }

  update(data: Thought): Observable<Thought> {
    const url = `${this.Api}/${data.id}`;
    return this.http.put<Thought>(url, data);
  }
}
