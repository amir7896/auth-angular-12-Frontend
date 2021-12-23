import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  data: any;

  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
    this.getAllEvents();
  }

  // Get Events
  getAllEvents(){
    this.eventService.getEvents()
    .subscribe(
      res => {
        this.data = res,
        console.log(res)
      } ,
      err => console.log(err)
    )
  }
  
}
