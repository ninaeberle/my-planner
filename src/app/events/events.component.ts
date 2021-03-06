import { Component, OnInit } from '@angular/core';
import { EventService } from './../event.service';
import { Event } from '../event';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[] = []; // Eintrag in Array speichern
  clicker: number;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getAll();

  }
  async setDone(event: Event) {
      if(event.over == false){
        event.over = true;
      }

      else if (event.over == true){
        event.over = false;
      }


        await this.eventService.events.put(event);
        await this.getAll();
    }

  async getAll() {
    this.events = await this.eventService.getAll();
  }

  async add(title: string, mydate: string, mytime: string) {
    await this.eventService.add(title, mydate, mytime); // Eintrag hinzufügen
    this.getAll();
  }

}

