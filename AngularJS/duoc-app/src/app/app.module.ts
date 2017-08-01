import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { myService } from './myService';


import { AppComponent } from './app.component';
import { DetailComponent } from './detail.component';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [myService],
  bootstrap: [AppComponent]
})
export class AppModule { }
