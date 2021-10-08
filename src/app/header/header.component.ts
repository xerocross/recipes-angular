import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output("locationEmit") locationEmitter = new EventEmitter<{location : string}>();
  constructor() { }

  ngOnInit(): void {
  }

  navigate(location: string) {
    console.log("emitting: " + location);
    this.locationEmitter.emit({location: location});
  }

}
