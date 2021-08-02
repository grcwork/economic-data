import { Component, OnInit } from '@angular/core';
import { IndicatorsService } from '../indicators.service';
import { DataFormat } from 'src/data_format';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {

  indicators?: DataFormat;

  constructor(private indicatorsService: IndicatorsService) { }

  ngOnInit(): void {
    this.getIndicators();
  }

  getIndicators(): void {
    this.indicatorsService.getIndicators().subscribe(indicators => this.indicators = indicators);
  }
}
