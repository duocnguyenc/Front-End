import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { MyService} from '../service/my.service';

@Component({
	selector: 'detail-root',
	templateUrl: './app.detail.component.html',
})
export class AppDetailComponent {
	showmem: any;
	constructor(private MyService: MyService) { }

	ngOnChanges() {

	}
	ngOnInit(){

	}

} 