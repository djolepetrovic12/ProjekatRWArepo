import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Zivotinja } from '../models/zivotinja';

@Injectable({
  providedIn: 'root'
})
export class ZivotinjeService {

  constructor(private httpClient : HttpClient) { }

  getAll(){
    return this.httpClient.get<Zivotinja[]>("http://localhost:3000/zivotinje");
  }

}

