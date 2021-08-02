import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { DataFormat } from 'src/data_format';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

  private indicatorsUrl = 'https://mindicador.cl/api';  // URL to web api

  constructor(private http: HttpClient) { }
 
  /* GET  indicators from the server */
  getIndicators(): Observable<DataFormat> {
    return this.http.get<DataFormat>(this.indicatorsUrl);
  }
}
