import { Component, OnInit } from '@angular/core';
import { ZivotinjeService } from '../../services/zivotinje.service';
import { Zivotinja } from '../../models/zivotinja';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-event-feed',
  templateUrl: './event-feed.component.html',
  styleUrl: './event-feed.component.css'
})
export class EventFeedComponent implements OnInit{

  constructor(private zivotinjeService:ZivotinjeService){}

  ngOnInit(): void {
    this.zivotinjke$ = this.zivotinjeService.getAll();
  }

  istampaj(zivotinja:Zivotinja) {
    console.log(zivotinja);
  }

zivotinjke$: Observable<Zivotinja[]> = of([]);





}
