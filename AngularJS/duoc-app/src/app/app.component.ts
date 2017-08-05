import { Component, ViewChild,OnInit, AfterContentInit } from '@angular/core';
import { MyService } from './myservice';
import { AppDetailComponent } from './detail/app.detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title:string = 'AngularJS';
    @ViewChild(AppDetailComponent) detacomp: AppDetailComponent;
    constructo() {

  }
    showDetail (trainer: any) {
     this.detacomp.showmem = trainer; 
    }
}


