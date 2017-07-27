import {Injectable} from '@angular/core';


@Injectable()
export class Member {
	listMember: string[] = [];
	constructor() {
		
	}
	insertData(data: string){
    this.listMember.push(data);
  }

  	deleteData(index: number){
      this.listMember.splice(index,1);
  }
}