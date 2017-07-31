import { Directive, ElementRef, Input,Renderer,OnInit } from '@angular/core';

@Directive({ selector: '[data]' })

export class HighlightDirective implements OnInit {
	@Input() data :any;
	constructor( private el: ElementRef,private renderer: Renderer 
		){

	}
	ngOnInit() {
		if(!this.data) {
			this.el.nativeElement.innerHTML = "Empty";
      		this.el.nativeElement.className = "empty";
		}
		else {
			this.el.nativeElement.innerHTML = this.data;
		}
	}
   

}