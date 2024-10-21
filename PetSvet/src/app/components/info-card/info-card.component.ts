import { Component, Input, input, OnInit, Output, output } from '@angular/core';
import { Zivotinja } from '../../models/zivotinja';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})

export class InfoCardComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.zivotinjka);
  }

  @Input() 
  zivotinjka:Zivotinja|null = null;

  @Output() klik : EventEmitter<Zivotinja> = new EventEmitter<Zivotinja>();


  clicked() {
    if(this.zivotinjka)
    {
      this.klik.emit(this.zivotinjka);
    }
  }

}
