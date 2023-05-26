import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private subject = new Subject<any>();
  sendClickEvent() {
    this.subject.next(event);
  }
  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
