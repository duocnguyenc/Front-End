import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AppListComponent } from './applist.component';
import { AppDetailComponent } from './appdetail.component';
import { MyService } from './myservice'

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    AppDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
