import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './modules/material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  exports: [
    MaterialModule,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
      CommonModule,
      MaterialModule
  ]
})
export class SharedModule { }
