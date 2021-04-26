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

padel_img="https://images.pexels.com/photos/4536850/pexels-photo-4536850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  event={
    creador:"fer",
    participantes:24,
    descripcion:"",
    hora:"12:30",
  }

}
