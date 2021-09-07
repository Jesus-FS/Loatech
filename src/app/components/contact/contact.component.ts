import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HOURS } from '../../models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  contactState: boolean;
  hoursRange: string[];

  constructor(private _formBuilder: FormBuilder) {
    this.contactState = false;
    this.hoursRange = HOURS;
    this.contactForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      company: ['', Validators.required],
      message: ['', Validators.required],
      date: [''],
      hour: [''],
    });
  }

  save(): void {
    console.log(this.contactForm.value);
  }

  changeForm(state: boolean): void {
    this.contactState = state;
  }
}
