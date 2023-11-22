import { Component, EventEmitter, Input, OnInit, Output}from'@angular/core';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{constructor() { }
@Input() userCount = 0;
@Output() getUsersEvent = new EventEmitter();
ngOnInit(): void {
}
getAllUsers() {
this.getUsersEvent.emit('get all users');
}
}
