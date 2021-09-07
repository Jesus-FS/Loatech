import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components';
import {
  HomeComponent,
  AboutComponent,
  ClientsComponent,
  ServicesComponent,
  CTAComponent,
  ProductsComponent,
  ContactComponent,
  FooterComponent,
} from './components';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DisableAutocompleteDirective } from './shared/directives';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';

const components = [
  AppComponent,
  DisableAutocompleteDirective,
  NavbarComponent,
  HomeComponent,
  AboutComponent,
  ClientsComponent,
  ServicesComponent,
  CTAComponent,
  ProductsComponent,
  ContactComponent,
  FooterComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FormsModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    IvyCarouselModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    IvyCarouselModule,
    MatExpansionModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
