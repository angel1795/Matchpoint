import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  red_array =[{
    img:"",
    name:"facebook"
  },
  {
    img:"",
    name:"twitter"

  },
  {
    img:"",
    name:"instagram"
  }]
}
