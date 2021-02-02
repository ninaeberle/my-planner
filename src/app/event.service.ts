import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Event } from './event';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class EventService extends Dexie {

  events: Dexie.Table<Event, string>;

  constructor() {

    super('EventsDatabase');
    this.version(1).stores({
      events: 'id'
    });
  }

  add(title: string): Promise<any> {
    const id = uuidv4();
    return this.events.add({ id, title, over: false });
  }

  getAll(): Promise<Event[]> {
    return this.events.toArray();
    }
}
