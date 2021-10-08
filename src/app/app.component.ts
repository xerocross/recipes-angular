import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() appDefaultLocation = "recipe";
  location: string = this.appDefaultLocation;

  onNavigate(event: {location : string}) {
    console.log("navigating to location: " + event.location);
    this.location = event.location;
  }

}
