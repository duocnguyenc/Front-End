import {AfterContentInit, Component, ContentChild, OnInit, ViewChild} from '@angular/core'
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
	member: Array<string>;
	@ViewChild(Applist) lists: any;
 	@ViewChild(Appform) listname: any;
 	constructor(){
 		this.member = []
   }
   ngOnInit(){
   	this.lists.data = this.member;
  this.listname.updateList(this.member);
   }
   
   AfterContentInit(){
   	 	this.lists.data = this.member;
  	this.listname.updateList(this.member);
   }
   pushNewMember(e: any) {
     this.member.push(e);
     this.lists.data = this.member;
     this.listname.updateList(this.member);
   }
   deleteNewMember(e: number) {
     this.member.splice(e, 1);
     this.lists.data = this.member;
     this.listname.updateList(this.member);
   }
}

