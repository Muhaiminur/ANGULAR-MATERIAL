import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatRippleModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule
} from '@angular/material';

const Materialcomponent = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatRippleModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule
]
@NgModule({
  imports: [Materialcomponent],
  exports: [Materialcomponent]
})
export class MaterialLibModule { }
