import { Component, OnInit } from '@angular/core';
import {CountryService} from '../config/CountryService';
import Country from '../models/Country';
import {MatDialog} from '@angular/material/dialog';
import {ModalCountriesComponent} from '../modals/modal-countries/modal-countries.component';

@Component({
  selector: 'app-bannedcountries',
  templateUrl: './bannedcountries.component.html',
  styleUrls: ['./bannedcountries.component.css']
})
export class BannedcountriesComponent implements OnInit {

  countries: Country[] | undefined;
  constructor(private countryService: CountryService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.countryService.findAllCountries().subscribe(data => {
      this.countries = data;
    });
  }

  openDialog(country: string, countryCode: string): void {
    const dialogRef = this.dialog.open(ModalCountriesComponent, {
      width: '250px',
      data: { name: country}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      this.countryService.updateCountry(countryCode, result.response).subscribe(data => {
        this.countries = data;
      });

    });
  }

}
