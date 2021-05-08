import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridSharedService {

  constructor() { }

  private rowSetterSize = new BehaviorSubject('');
  rowSetterPerPage = this.rowSetterSize.asObservable();

  updateRowSetterSize (rowSetter : any){
    this.rowSetterSize.next(rowSetter);
  }
}
