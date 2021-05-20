import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {
  profileForm = new FormGroup({

  });
  hide = true
  hide2 = true
  constructor() { }

  ngOnInit() {
  }

  deportes = [{
    sport: "Fútbol"
  },
  {
    sport: "Baloncesto"
  },
  {
    sport: "Pádel"
  },
  {
    sport: "Tenis"
  },
  {
    sport: "Ciclismo"
  },
  {
    sport: "Running"
  }]
}
