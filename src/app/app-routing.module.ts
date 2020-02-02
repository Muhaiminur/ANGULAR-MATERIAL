import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JavaDetailsComponent } from './java-details/java-details.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { AndroidDetailsComponent } from './android-details/android-details.component';


const routes: Routes = [
  {path: 'java-details',component: JavaDetailsComponent},
  {path: 'android-details',component: AndroidDetailsComponent},
  {path: 'business-details',component: BusinessDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
