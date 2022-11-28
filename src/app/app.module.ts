import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './header/navbar.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../routes';
import { CreateEventComponent } from './events/create-events.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-route-activator.service';
import { EventsListResolver } from './events/events-list-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventsListResolver,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }
  return true;
}
