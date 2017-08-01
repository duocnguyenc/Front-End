import { Component, Input } from '@angular/core';
import { myService } from './myService';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['../app.component.css'],
  providers: [myService]
})
export class DetailComponent {
  @Input() id: number;
  eachtrainer: any;
  constructor(private list: myService) {
  }

  ngDoCheck() {
    this.eachtrainer = this.list.getTrainer(this.id);
  }
}