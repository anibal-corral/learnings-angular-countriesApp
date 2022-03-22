import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _url:string = "https://restcountries.com/v3.1";
  get httpParams(){
    return  new HttpParams().set('fields','name,capital,flag,population,cca2');
  }

  constructor(private http:HttpClient) { }


  searchCountry(query:string):Observable<Country[]>{
const url = `${this._url}/name/${query}`;
return this.http.get<Country[]>(url,{params:this.httpParams});

  }
  // https://restcountries.com/v3.1/region/europe
  searchByRegion(query:string):Observable<Country[]>{

   
    const url = `${this._url}/region/${query}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
    
      }
      searchByCapital(query:string):Observable<Country[]>{
        const url = `${this._url}/capital/${query}`;
        return this.http.get<Country[]>(url, {params:this.httpParams});
        
          }

          //https://restcountries.com/v3.1/capital/{capital}

          searchByAlpha(code:string):Observable<Country>{
            const url = `${this._url}/alpha/${code}`;
            return this.http.get<Country>(url);
            
              }
}
