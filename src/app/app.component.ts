import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gtech-material';
  spinner_value=false;
  side_nav_open=false;
  spinnername;
  fromnavigation='';
  @ViewChild('sidenav', {static: false}) sidenav_on_off: MatSidenav;
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

}
