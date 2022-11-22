import { Component, Input } from "@angular/core";

@Component({
    selector: "event-thumbnail",
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}" [ngSwitch]="event?.time">Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late start)</span>
                <span *ngSwitchDefault>(Normal start)</span>
            </div>
            <div>Price: €{{event?.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
        </div>
    `,
    styles: [`
        .thumbnail {min-height: 210px;}
        .pad-left { margin-left: 10px;}
        .well div {color: #bbb;}
        .green {color: #003300 !important;}
        .bold {font-style: bold;}
    `]
})
export class EventThumbnailComponent{
    @Input() event:any
}