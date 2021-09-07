import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  changeLanguage(state: boolean): void {
    if (state) {
      console.log('ingles');
    } else {
      console.log('español');
    }
  }
}
