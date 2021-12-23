import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private _eventUrl = "http://localhost:3000/api/events";
  private _specialEventUrl = "http://localhost:3000/api/special";
  constructor(private httpClient: HttpClient) { }

  // =================
  // Get Events
  // =================
  getEvents(){
    return this.httpClient.get(this._eventUrl);
  }
  // ===================
  // Get Special Events
  // ==================
  getSpecialEvents(){
    return this.httpClient.get(this._specialEventUrl);
  }
}
