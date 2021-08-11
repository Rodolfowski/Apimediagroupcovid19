import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountryCheckService {

  constructor(private http: HttpClient ) { }

  getAllData():Observable<any>{
    const urlMundo = 'https://covid-api.mmediagroup.fr/v1/cases';
    return this.http.get<any>(urlMundo)
} //This method is for populate country list in dropdown. Mention your api url in
  //place of xxxx.com

  getCountryData(country:string):Observable<any>{
     const url = "https://covid-api.mmediagroup.fr/v1/cases?country="+country;
     return this.http.get<any>(url)
} //this method is for show country wise covid-19 details. Mention your api url
  // in place of xxxx.com
}
