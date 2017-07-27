import { Component } from '@angular/core';
import { Member } from './member';
@Component({
  selector: 'app-form',
  templateUrl: './appform.component.html'
 
})

export class Appform {
	title: string = 'LIST MEMBER MANAGERMENT';
	name: string;
	listname: string[]= [];
	constructor(private syncname : Member) {
		this.name='';
	}
	initContent() {
     	this.syncname.insertData(this.name);
   	}
   	addMember() {
   		this.listname.push(this.name);
   	}
}