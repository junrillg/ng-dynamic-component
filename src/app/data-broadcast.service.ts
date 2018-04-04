import {
  EventEmitter,
  Injectable
} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataBroadcastService {

  private dataSubject: Subject<string> = new BehaviorSubject<string>(null);
  public data = this.dataSubject.asObservable();

  broadcastDataChange(text: string) {
    this.dataSubject.next(text);
  }
}
