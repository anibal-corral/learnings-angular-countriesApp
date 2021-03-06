import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit {
query:string='';
isError:boolean=false;
countries:Country[]=[];
suggestedCountries: Country[]=[];
showSuggestions:boolean=false;



  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
  }
search(query:string):void{
  this.showSuggestions=false;
  this.isError=false;
  this.query=query;
this.countryService.searchCountry(this.query).subscribe(
  (countries)=>{console.log(countries);this.countries=countries;},
  (err)=> {this.isError=true;console.log(err);this.countries=[];}
  );
}
suggestions(query:string){
  this.isError=false;
  this.showSuggestions=true;
  this.query=query;
  this.countryService.searchCountry(query).subscribe(countries => this.suggestedCountries=countries.splice(0,5),(err)=>this.suggestedCountries=[]);
}
searchBySuggestions(suggest:string):void{


  this.search(suggest);
  // this.showSuggestions=false;
}
}
