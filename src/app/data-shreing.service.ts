import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShreingService {

  SharingData =new Subject<any>();
  constructor() { }
}
