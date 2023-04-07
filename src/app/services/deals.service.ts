import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealsService {
  constructor(private _HttpClient:HttpClient) { }
  getDeals():Observable<any>{
    return this._HttpClient.get("https://my-json-server.typicode.com/mabukoush1/contacts/db")
  }
}
