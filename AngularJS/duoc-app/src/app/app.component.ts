import { Component,ViewChild} from '@angular/core';
import { Member } from './member';
import { Applist } from './applist.component';
import { Appform } from './appform.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Member]
})
export class AppComponent {
	hello: string;
	name: string;
	@ViewChild(Applist) lists: any;
 	@ViewChild(Appform) listname: any;
 	constructor(){
 
   }
   ngOnInit(){
   	this.lists.data = this.listname.listname;
   }
   
   AfterContentInit(){
   		// this.lists.datas.push(this.getName.name);
   }
}

