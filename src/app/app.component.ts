import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gtech-material';
  spinner_value=false;
  side_nav_open=false;
  fromnavigation='';
  @ViewChild('sidenav') sidenav_on_off: MatSidenav;
  spinner_onn(value){
    console.log(value);
    if(this.spinner_value === true){
      this.spinner_value=false;
    }else{
      this.spinner_value=true;
    }
  }
  clicknavigation(value){
    this.fromnavigation=value;
    this.sidenav_on_off.close();
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
