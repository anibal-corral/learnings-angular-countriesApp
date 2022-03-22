import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {
isError:boolean=false;
query:string='';
countries:Country[]=[];

regions:string[]=['Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];
activeRegion:string='';
  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
  }
  search(query:string):void{
    this.isError=false;
    this.query=query;
  this.countryService.searchByRegion(this.query).subscribe(
    (countries)=>{console.log(countries);this.countries=countries;},
    (err)=> {this.isError=true;console.log(err);this.countries=[];}
    );
  }

  activateRegion(region:string):void{
if(this.activeRegion===region)return;
this.activeRegion=region;
this.countries=[];

this.search(region);
  }

}
