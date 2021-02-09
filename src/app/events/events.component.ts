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

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getAll();

  }
  async setDone(event: Event) {
      event.over = true;

        await this.eventService.events.put(event);
        await this.getAll();
    }

  async getAll() {
    this.events = await this.eventService.getAll();
  }

  async add(title: string) {
    await this.eventService.add(title); // Eintrag hinzufügen
    this.getAll();
  }

}

