import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDisableAutocomplete]',
})
export class DisableAutocompleteDirective implements OnInit {
  @Input('formControlName') formControlName: string | undefined;

  constructor(private _elementRef: ElementRef<HTMLInputElement>) {}

  private generateRandomString(name: string): string {
    const currentTime = new Date().getTime();
    return `&${currentTime}-${name}`;
  }

  ngOnInit(): void {
    const randomString = this.generateRandomString(this.formControlName || this._elementRef.nativeElement.name);
    this._elementRef.nativeElement.autocomplete = randomString;
    this._elementRef.nativeElement.name = randomString;
  }
}
