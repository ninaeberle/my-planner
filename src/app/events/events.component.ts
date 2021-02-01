import { Component, OnInit } from '@angular/core';
import { EventService } from './../event.service';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eventService: EventService) { }


  ngOnInit(): void {
  }

  async add(title: string) {
    await this.eventService.add(title); // Eintrag hinzufügen
  }

}
