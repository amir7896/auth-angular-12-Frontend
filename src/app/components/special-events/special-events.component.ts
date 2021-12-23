import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  data: any;

  constructor(private eventServce: EventsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSpecial();
  }
  getSpecial(){
    this.eventServce.getSpecialEvents()
    .subscribe(
      res => {
        this.data =res,
        console.log(res);
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.router.navigate(['/login'])
          }
        }
      }
    )
  }

}
