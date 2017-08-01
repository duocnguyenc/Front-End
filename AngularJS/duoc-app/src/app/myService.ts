import { Injectable } from '@angular/core'

@Injectable()
export class myService {
  trainers:any[];
  constructor(){
    this.trainers = [
    { name: 'Vi', avatar: 'https://www.shareicon.net/data/128x128/2015/12/14/207809_face_300x300.png',birthday: '1-2-1990', team: 'FE'},
    { name: 'Kien', avatar: 'https://www.shareicon.net/data/128x128/2015/12/14/207817_face_300x300.png', birthday: '2-3-1991', team: 'Ruby'},
    { name: 'Nguyen', avatar: '', birthday: '3-4-1989', team: 'PHP'}
    ];
  }
  getTrainers(): any[] {
    return this.trainers;
  }

  getTrainer(i: number): any {
    return this.trainers[i];
  }
}