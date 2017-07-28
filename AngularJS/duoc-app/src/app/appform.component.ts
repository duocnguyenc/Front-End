import {Component, EventEmitter, Output, OnInit, ViewChild} from '@angular/core';
import { Member } from './member';
@Component({
  selector: 'app-form',
  templateUrl: './appform.component.html'
 
})

export class Appform implements OnInit{
	title: string = 'LIST MEMBER MANAGERMENT';
	name: string;
	listname: string[]= [];
	@Output() result: EventEmitter<any> = new EventEmitter<any>();
	constructor(private syncname : Member) {
		this.name='';
	}
   	addMember() {
   		this.listname.push(this.name);
   	}
   	ngOnInit() {
 
   }
   newMember() {
      this.result.emit(this.name);
   }
}