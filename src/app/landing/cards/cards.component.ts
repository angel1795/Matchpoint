import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  events_array =[{
    img:"https://as1.ftcdn.net/jpg/02/03/55/74/500_F_203557444_uzfFPllmHxqPFEfnim8gnfml54uehUtS.jpg",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    img:"https://as2.ftcdn.net/jpg/01/19/56/97/500_F_119569789_8ynFAQMRNKZ3jqPVsAH4Loaz003Vtzdr.jpg",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    img:"https://image.freepik.com/foto-gratis/hombre-negro-haciendo-deporte-jugando-baloncesto-al-amanecer-saltando-silueta_285396-1440.jpg",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content."
  }]

  sports_array =[{
    img:"https://as1.ftcdn.net/jpg/02/03/55/74/500_F_203557444_uzfFPllmHxqPFEfnim8gnfml54uehUtS.jpg",
    title: "Pádel",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    img:"https://as2.ftcdn.net/jpg/01/19/56/97/500_F_119569789_8ynFAQMRNKZ3jqPVsAH4Loaz003Vtzdr.jpg",
    title: "Fútbol",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content."

  },
  {
    img:"https://image.freepik.com/foto-gratis/hombre-negro-haciendo-deporte-jugando-baloncesto-al-amanecer-saltando-silueta_285396-1440.jpg",
    title: "Baloncesto",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    img:"https://as2.ftcdn.net/jpg/01/19/56/97/500_F_119569789_8ynFAQMRNKZ3jqPVsAH4Loaz003Vtzdr.jpg",
    title: "Fútbol",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content."

  },
  {
    img:"https://as2.ftcdn.net/jpg/01/19/56/97/500_F_119569789_8ynFAQMRNKZ3jqPVsAH4Loaz003Vtzdr.jpg",
    title: "Fútbol",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content."

  }]

}
