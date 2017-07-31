	import { Component,Directive, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './exercise.component.html',
  styleUrls: ['./app.component.css']
})
export class Color {
	trainer: any;
	objectName: any;

 	constructor() {
 		this.trainer = [];
 		this.trainer.push(
 		{	
 			image:'https://depdrama.com/wp-content/uploads/2015/08/Hinh-anh-dep-lang-man-trong-tinh-yeu-1.jpg',
 			name: 'Vi',
 			birthDay: '1-2-1990',
 			team: 'FE'
 		},
 		{
 			image:'https://depdrama.com/wp-content/uploads/2015/08/Hinh-anh-dep-lang-man-trong-tinh-yeu-1.jpg',
 			name: 'Kien',
 			birthDay: '1-3-1991',
 			team:'Ruby'	
 		},
 		{
 			image:'https://depdrama.com/wp-content/uploads/2015/08/Hinh-anh-dep-lang-man-trong-tinh-yeu-1.jpg',
 			name: 'Duoc',
 			birthDay: '',
 			team:'PHP'		
 		}
 		);
  	}
  	showDetail(id:any) {
  		this.objectName = this.trainer[id];
     
     setTimeout(()=>{
     this.trainer = id;
      });
  	}
    
}