import { Component, Output, EventEmitter } from '@angular/core';
import { myService } from '../myService';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../app.component.css'],
  providers: [TrainersService]
})
export class ListComponent {
  trainers: any[];

  @Output() showdetail: EventEmitter<any> = new EventEmitter<any>();

  constructor(private list: TrainersService) {
  }

  ngOnInit() {
    this.trainers = this.list.getTrainers();
  }

  detail(i: number){
    this.showdetail.emit(i);
  }
}