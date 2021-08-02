import { Component, Input, OnInit } from '@angular/core';
import { IndicatorFormat } from 'src/data_format'; 

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {

  indicator?: IndicatorFormat;

  @Input()
  inputIndicator?: IndicatorFormat;

  constructor() { }

  ngOnInit(): void {
    this.indicator = this.inputIndicator;
  }

}
