import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	hello: string;
	name: string;
	constructor(){
		this.hello = "Hello World!";
	}
 	showName() {
 		this.name = "My name is Duoc";
 	}
 	hideName() {
 		this.name = "";
 	}
}
