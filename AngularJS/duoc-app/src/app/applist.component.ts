import { Component } from '@angular/core';
import { Member } from './member';

@Component({
  selector: 'app-list',
  templateUrl: './applist.component.html'
})
export class Applist {
	data: string[];
	constructor(private syncname: Member){
		this.data = this.syncname.listMember;
	}
	deleteMember(i:number) {
		this.syncname.deleteData(i);
	}

}