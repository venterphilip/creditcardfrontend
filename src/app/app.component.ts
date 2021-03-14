import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ccfrontend';
  active = 0;
  // tslint:disable-next-line:typedef
  onTabChange(e: any) {
    console.log(e);
  }
}
