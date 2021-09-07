import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isOpen: boolean;
  @Output() stateScroll = new EventEmitter<boolean>();

  constructor() {
    this.isOpen = true;
  }

  panelOpenState = false;

  openMenu(): void {
    if (this.isOpen) {
      console.log('abrir menu');
      this.isOpen = false;
    } else {
      this.isOpen = true;
      console.log('cerrar menu');
    }
    this.stateScroll.emit(!this.isOpen);
  }
}
