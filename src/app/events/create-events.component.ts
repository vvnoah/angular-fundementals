import { Component } from "@angular/core";

@Component({
    template: `
        <h1>New Event</h1>
        <hr>
        <div class="col-md-6">
            <h3>form</h3>
            <br>
            <br>
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="button" class="btn btn-default">Cancel</button>
        </div>
    `,
})
export class CreateEventComponent {

}