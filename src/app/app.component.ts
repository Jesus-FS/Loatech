import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'loatech-web-angular';

  constructor(private _elementRef: ElementRef) {}

  ngOnInit(): void {
    this.changeStateScroll(false);
  }

  changeStateScroll(value: boolean): void {
    if (value) {
      this._elementRef.nativeElement.ownerDocument.body.style.overflowY = 'hidden';
    } else {
      this._elementRef.nativeElement.ownerDocument.body.style.overflowY = 'scroll';
    }
  }
}
