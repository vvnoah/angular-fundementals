import { Routes } from '@angular/router'
import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
import { EventsListComponent } from "./app/events/events-list.component";

export const ROUTES:Routes = [
    {path:'events', component: EventsListComponent},
    {path:'events/:id', component: EventDetailsComponent},
    {path:'', redirectTo: '/events', pathMatch: 'full'},
]