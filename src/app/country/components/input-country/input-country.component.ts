import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html',
  styleUrls: ['./input-country.component.css']
})
export class InputCountryComponent implements OnInit {
query:string='';
@Output() onEnter:EventEmitter<string>= new EventEmitter();
@Output() onDebounce:EventEmitter<string>=new EventEmitter();
@Input() placeholder:string='';

debouncer:Subject<string>= new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(val => {
      // console.log('debouncer',val);
      this.onDebounce.emit(val);
    })
  }
  
  search():void{
    this.onEnter.emit(this.query);

  }

  keyPressed():void{
//  console.log(event.target.value);
this.debouncer.next(this.query);
  }

}
