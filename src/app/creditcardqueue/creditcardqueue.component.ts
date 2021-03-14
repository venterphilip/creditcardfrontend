import { Component, OnInit } from '@angular/core';
import CreditCard from '../models/CreditCard';
import {CardService} from '../config/CardService';

@Component({
  selector: 'app-creditcardqueue',
  templateUrl: './creditcardqueue.component.html',
  styleUrls: ['./creditcardqueue.component.css']
})
export class CreditcardqueueComponent implements OnInit {
  creditCards: CreditCard[] | undefined;
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.findAllCards().subscribe(data => {
      this.creditCards = data;
    });
  }

}
