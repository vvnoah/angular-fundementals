import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Events</h1>
        </div>
    `
})
export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '22-11-2022',
        time: '10:00',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}