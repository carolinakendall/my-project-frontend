import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {
  private apiUrl = 'https://disease.sh/v3/covid-19/all'; 

  constructor(private http: HttpClient) { }

  // Method to get data from the API
  getEpidemicData(): Observable<any> { //An Observable is stream of data that you can subscribe to in order to receive updates (in this case, when the API response is ready).
  // a way of handling asynchronous data in Angular (it’s part of the RxJS library)
    return this.http.get<any>(this.apiUrl); //any should be replaced by an interface with the json model
  }
}
