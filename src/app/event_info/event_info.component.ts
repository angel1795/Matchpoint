import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event_info',
  templateUrl: './event_info.component.html',
  styleUrls: ['./event_info.component.scss']
})
export class Event_infoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  event={
    creador:"fer",
    participantes:24,
    descripcion:"",
    hora:"12:30",
  }

}
