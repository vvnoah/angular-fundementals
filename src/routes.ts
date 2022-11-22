import { Routes } from '@angular/router'
import { CreateEventComponent } from './app/events/create-events.component';
import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
import { EventsListComponent } from "./app/events/events-list.component";

export const ROUTES:Routes = [
    {path:'events/new', component: CreateEventComponent},
    {path:'events', component: EventsListComponent},
    {path:'events/:id', component: EventDetailsComponent},
    {path:'', redirectTo: '/events', pathMatch: 'full'},
]