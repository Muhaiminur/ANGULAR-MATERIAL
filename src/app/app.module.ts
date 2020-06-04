import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialLibModule } from './material-lib/material-lib.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { JavaDetailsComponent } from './java-details/java-details.component';
import { AndroidDetailsComponent } from './android-details/android-details.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { HttpClientModule }    from '@angular/common/http';
import { MatSortModule, MatTableModule } from '@angular/material';

import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    JavaDetailsComponent,
    AndroidDetailsComponent,
    BusinessDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialLibModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
