import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  readonly API_URL = 'https://rickandmortyapi.com/api/';
  constructor(private http: HttpClient) { }
}
