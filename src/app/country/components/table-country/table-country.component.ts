import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-table-country',
  templateUrl: './table-country.component.html',
  styleUrls: ['./table-country.component.css']
})
export class TableCountryComponent implements OnInit {
@Input('countries') countries:Country[]=[];



  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
  }

}
