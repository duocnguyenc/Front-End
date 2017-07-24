import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'AngularJS';
}

/*
@Component({
	selector: 'app-root',
	template:
	`<div>
		<button (click) = checkClick() value = "Click me!"></button>
	</div>
	`
})
export class Counter {
	checkClick() {
		console.log('Clicked!');
	}
}
*/
