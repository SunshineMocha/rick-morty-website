import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, switchMap } from 'rxjs';
import { Character } from '../model/character';
import { Episode } from '../model/episode';
import { BaseData } from '../model/basedata';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  readonly API_URL = 'https://rickandmortyapi.com/api/';
  constructor(private http: HttpClient) { }

  // getBaseDataWithObservable(): Observable<BaseData>{
  //   return this.http.get<BaseData>(this.API_URL);
  // }

  // getCharacterWithObservable(): Observable<Character>{
  //   return this.http.get<Character>(this.API_URL+'character');
  // }

  getAllCharacterWithObservable(): Observable<Character[]>{
    return this.http.get<Character>(this.API_URL+'character').pipe(
      switchMap(characters => {
        const results = characters.results
        const getArray = []
        for (const result of results) {
          const request = this.http.get<Character>(result.url)
          getArray.push(request)
        }
        return forkJoin(getArray)
      })
    )
  }
  getAllEpisodeWithObservable(): Observable<Episode[]>{
    return this.http.get<Episode>(this.API_URL+'episode').pipe(
      switchMap(episodes => {
        const results = episodes.results
        const getArray = []
        for (const result of results) {
          const request = this.http.get<Episode>(result.url)
          getArray.push(request)
        }
        return forkJoin(getArray)
      })
    )
  }
  getAllLocationWithObservable(): Observable<Location[]>{
    return this.http.get<Location>(this.API_URL+'location').pipe(
      switchMap(locations => {
        const results = locations.results;
        const getArray = []
        for (const result of results) {
          const request = this.http.get<Location>(result.url)
          getArray.push(request)
        }
        return forkJoin(getArray)
      })
    )
  }


  // getLocationWithObservable(): Observable<Location>{
  //   return this.http.get<Location>(this.API_URL+'location');
  // }
  // getEpisodeWithObservable(): Observable<Episode>{
  //   return this.http.get<Episode>(this.API_URL+'episode');
  // }
}
