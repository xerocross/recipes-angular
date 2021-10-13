import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output("locationEmit") locationEmitter = new EventEmitter<{location : string}>();
  constructor() { }

  myEnvironment: string = environment.ENV;
  ngOnInit(): void {
  }

  navigate(location: string) {
    console.log("emitting: " + location);
    this.locationEmitter.emit({location: location});
  }

}
