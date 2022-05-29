import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
subjects;
  constructor() {}
  ngOnInit(): void {
 this.subjects=[
   {
     img:'assets/icon/search.jpg',
     name:'Payer Facture'
   },
   {
    img:'assets/icon/paiement.png',
    name:'Historique des paiement'
  }
 ]
  }

}
