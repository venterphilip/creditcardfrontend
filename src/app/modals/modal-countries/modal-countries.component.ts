import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-countries',
  templateUrl: './modal-countries.component.html',
  styleUrls: ['./modal-countries.component.css']
})
export class ModalCountriesComponent implements OnInit {

  response = 'Yes';

  constructor(
    public dialogRef: MatDialogRef<ModalCountriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onFalseClick(): void {
    this.dialogRef.close({
      response: false
    });
}

  onTrueClick(): void {
    this.dialogRef.close({
      response: true
    });
}
}
