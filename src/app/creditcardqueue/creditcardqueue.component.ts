import {Component, OnDestroy, OnInit} from '@angular/core';
import CreditCard from '../models/CreditCard';
import {CardService} from '../config/CardService';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-creditcardqueue',
  templateUrl: './creditcardqueue.component.html',
  styleUrls: ['./creditcardqueue.component.css']
})
export class CreditcardqueueComponent implements OnInit, OnDestroy {
  creditCards: CreditCard[] | undefined;
  subscription: Subscription | undefined;
  constructor(private cardService: CardService) { }

  // On init populate lists and start interval to refresh lists every 10 seconds
  ngOnInit(): void {
    this.cardService.findAllCards().subscribe(data => {
      this.creditCards = data;
    });

    // emit value in sequence every 10 second
    const source = interval(10000);

    this.subscription = source.subscribe(val => {
      this.cardService.findAllCards().subscribe(data => {
        this.creditCards = data;
      });
    });
  }

  ngOnDestroy(): void {
    // @ts-ignore
    this.subscription.unsubscribe();
  }
}
