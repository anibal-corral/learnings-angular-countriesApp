import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {

  country!: Country;

  constructor(private activatedRoute:ActivatedRoute, private countryService:CountryService) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params=>{
    //   console.log(params);

    //   this.countryService.searchByAlpha(params.id).subscribe(country=>{
    //     console.log(country);
    //   })
    
    // });

    this.activatedRoute.params
    .pipe(
      switchMap((param)=>this.countryService.searchByAlpha(param.id)),
      tap(console.log)
    ).subscribe(country=>this.country=country[0])
  }

}
