import { Component } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { addDays, startOfDay } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    {
      title: 'Event 1',
      start: startOfDay(new Date()),
      end: addDays(startOfDay(new Date()), 1),
      color: { primary: '#e3bc08', secondary: '#FDF1BA' }
    },
    // Add more events as needed
  ];
}
