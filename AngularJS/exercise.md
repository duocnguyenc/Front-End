# Angular
 
### Knowledge round-up
 
  **Component**
 
   - Briefly explain Event Binding in Angular?
Event binding allows us to work in reverse from property binding. We can send information from the view, to the component class. Such information usually involves a click, hover or typing. Below is an example of event binding:
   ```
   <button" (click)='myMethod()'></button>
   ```
   - Briefly explain Data Binding in Angular?
    It allows to link Application data value one way from Component to 	Template, help the application is easier to write, read and maintaince.
    Example: 
 ```
    	<input type="text" [(ngModel)]="name">
    	<p>Hello {{name}}!</p>
 ```
 
   - What are Event Emitters and how it works in Angular?
   Even Emitters is an Angular abstraction, emitting custom Events in components, useful for Parent Component getting data from Child Component.
  When Child Component declare 
 ```
  @Output data = new EventEmitter<any>()
 ```
  the @Output exposes an event that parents can attach listeners to in its template. 
  It has a method name: ```emit()```, we can send any data from Child to Parent with it, when Event occurs.
  
   - Explain the life cycle hooks of Angular application?
  A component has a lifecycle managed by Angular.
 Angular creates it, renders it, creates and renders its children, checks it when its data-bound properties change, and destroys it before removing it from the DOM.
 Example:
 -- ngOnChanges()	
 -- ngOnInit()	
 -- ngDoCheck()	
 -- ngOnChanges() and ngOnInit().
 -- ngAfterContentInit()	
 -- ngAfterContentChecked()	
 -- ngAfterViewInit()	
 -- ngAfterViewChecked()	
 -- ngAfterContentChecked().
 -- ngOnDestroy	
 
   - Explain the `ContentChild` `ContentChildren` and write an example?
 `Content children` are. The children element which are located inside of its template of a component are called `view children `. On the other hand, **elements which are used between the opening and closing tags of the host element of a given component are called `content children` **.
 This means that todo-input and todo-item could be considered view children of todo-app, and app-footer (if it is defined as Angular component or directive) could be considered as a content child.

##### Example
#####  parent.component.ts
 import {
   Component,
   ViewChildren,
   ContentChildren,
   QueryList,
   AfterViewInit,
   AfterViewChecked,
   AfterContentInit,
   AfterContentChecked
 } from '@angular/core'
 import { ChildComponent } from './child.component';
 @Component({
   selector: 'my-parent',
   providers: [],
   template: `
     <div>children count: <strong>{{ count }}</strong></div>
     <div>
       <ol>
         <my-child *ngFor="let log of data; let i = index" [log]="log" [index]="i" (onDelete)="remove($event)"></my-child>
       </ol>
     </div>
   `,
   directives: [
     ChildComponent
   ]
 })
 export class ParentComponent implements AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
   
data = [ 'foo', 'bar', 'baz' ];
count = 0;
   
   @ViewChildren(ChildComponent) children: QueryList<ChildComponent>: 
   
   // constructor() {}
   
   ngAfterViewInit() {
     this.count = this.children.length;
   }
 }
  
##### child.component.ts

 //our child component
 import {
   Component,
   Input,
   Output,
   EventEmitter,
   OnDestroy
 } from '@angular/core'
 
 @Component({
   selector: 'my-child',
   providers: [],
   template: `
     <li>{{ log }}</li>
   `,
   directives: []
 })
 export class ChildComponent implements OnDestroy {
   
   @Input() log: string;
   @Input() index: number;
   
   @Output() onDelete = new EventEmitter();
   
   ngOnDestroy() {
     console.log('child ngOnDestroy => ', this.log);
   }
   
   delete() {
     this.onDelete.emit(this.index);
   }
   
 }
