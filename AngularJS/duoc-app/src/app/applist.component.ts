import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Member } from './member';

@Component({
  selector: 'app-list',
  templateUrl: './applist.component.html'
})
export class Applist implements OnInit{
	@Input() data: any;
	@Output() result2: EventEmitter<any> = new EventEmitter<any>();
	constructor(private syncname: Member){
		this.data = this.syncname.listMember;
	}
	ngOnInit(): any {
  	 }
   	deleteMember(i: number)  {
       this.result2.emit(i);
   }
}