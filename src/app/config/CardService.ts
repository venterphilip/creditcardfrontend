import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import Card from '../models/Card';
import CreditCard from '../models/CreditCard';

@Injectable()
export class CardService {
  cardsUrl: string;
  constructor(private http: HttpClient) {
    this.cardsUrl = 'http://localhost:8080';
  }

  public findAllCards(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(this.cardsUrl + '/card');
  }

  public findAllCardsInQueue(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(this.cardsUrl + '/card/queue');
  }

  public addCard(card: Card): any {
    return this.http.post<string>(this.cardsUrl + '/card/load', card);
  }

}
