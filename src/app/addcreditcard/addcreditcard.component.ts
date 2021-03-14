import { Component, OnInit } from '@angular/core';
import CreditCard from '../models/CreditCard';
import {CardService} from '../config/CardService';
import {MyModalComponent} from '../modals/my-modal/my-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-addcreditcard',
  templateUrl: './addcreditcard.component.html',
  styleUrls: ['./addcreditcard.component.css']
})
export class AddcreditcardComponent implements OnInit {

  creditCards: CreditCard[] | undefined;
  name: string | undefined = '';

  constructor(private cardService: CardService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cardService.findAllCardsInQueue().subscribe(data => {
      this.creditCards = data;
    });
  }

  onClick(): void{
    console.log(this.name);
    this.openDialog();
  }

  checkName(): boolean{
    // @ts-ignore
    return isNaN(this.name);
  }

  isCardValid(): boolean{
    // @ts-ignore
    return !isNaN(this.name) && this.name.length === 16;
  }

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

  addNewCardAndGetQueue(): void{
    this.cardService.addCard({
      cardNumber: this.name
    }).subscribe((data: any) => {
      if (data){
        this.cardService.findAllCardsInQueue().subscribe(cardResponse => {
          this.creditCards = cardResponse;
        });
      }
    });
  }
}
