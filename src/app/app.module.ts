import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { AddcreditcardComponent } from './addcreditcard/addcreditcard.component';
import { CreditcardqueueComponent } from './creditcardqueue/creditcardqueue.component';
import { BannedcountriesComponent } from './bannedcountries/bannedcountries.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {CountryService} from './config/CountryService';
import {CardService} from './config/CardService';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MyModalComponent } from './modals/my-modal/my-modal.component';
import { ModalCountriesComponent } from './modals/modal-countries/modal-countries.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcreditcardComponent,
    CreditcardqueueComponent,
    BannedcountriesComponent,
    MyModalComponent,
    ModalCountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [
    CountryService,
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
