import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _url:string = "https://restcountries.com/v3.1";

  constructor(private http:HttpClient) { }


  searchCountry(query:string):Observable<Country[]>{
const url = `${this._url}/name/${query}`;
return this.http.get<Country[]>(url);

  }
  // https://restcountries.com/v3.1/region/europe
  searchByRegion(query:string):Observable<Country[]>{
    const url = `${this._url}/region/${query}`;
    return this.http.get<Country[]>(url);
    
      }
      searchByCapital(query:string):Observable<Country[]>{
        const url = `${this._url}/capital/${query}`;
        return this.http.get<Country[]>(url);
        
          }

          //https://restcountries.com/v3.1/capital/{capital}

          searchByAlpha(id:string):Observable<Country>{
            const url = `${this._url}/alpha/${id}`;
            return this.http.get<Country>(url);
            
              }
}
