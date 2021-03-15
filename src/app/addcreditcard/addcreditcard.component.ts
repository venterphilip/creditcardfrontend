import {Component, OnDestroy, OnInit} from '@angular/core';
import CreditCard from '../models/CreditCard';
import {CardService} from '../config/CardService';
import {MyModalComponent} from '../modals/my-modal/my-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-addcreditcard',
  templateUrl: './addcreditcard.component.html',
  styleUrls: ['./addcreditcard.component.css']
})
export class AddcreditcardComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined;
  creditCards: CreditCard[] | undefined;
  name: string | undefined = '';

  constructor(private cardService: CardService, public dialog: MatDialog) { }

  // On init populate lists and start interval to refresh lists every 10 seconds
  ngOnInit(): void {
    this.cardService.findAllCardsInQueue().subscribe(data => {
      this.creditCards = data;
    });

    // emit value in sequence every 10 second
    const source = interval(10000);

    this.subscription = source.subscribe(val => {
      this.cardService.findAllCardsInQueue().subscribe(data => {
        this.creditCards = data;
      });
    });
  }

  // on click open dialog
  onClick(): void{
    console.log(this.name);
    this.openDialog();
  }

  // validation
  checkName(): boolean{
    // @ts-ignore
    return isNaN(this.name);
  }

  // validation
  isCardValid(): boolean{
    // @ts-ignore
    return !isNaN(this.name) && this.name.length === 16;
  }

  // open dialog and get result back, if yes do request to add CC and refresh list
  openDialog(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '250px',
      data: { name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      if (result.response == 'Yes'){
        this.addNewCardAndGetQueue();
      }

    });
  }

  // do request to backend to add card and clear binded value
  addNewCardAndGetQueue(): void{
    this.cardService.addCard({
      cardNumber: this.name
    }).subscribe((data: any) => {
      if (data){
        this.cardService.findAllCardsInQueue().subscribe(cardResponse => {
          this.creditCards = cardResponse;
        });
      }
      if (data === 'OK'){
        this.name = '';
      }
    });
  }

  ngOnDestroy(): void {
    // @ts-ignore
    this.subscription.unsubscribe();
  }
}
