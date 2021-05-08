import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit,OnChanges {

  dropDown = new FormControl();
  @Input() 
  public dataList : any = []; 
  @Input() selected; 
  
  @Output() 
  public changeValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges() {
    if(this.dataList && this.dataList.length){
      console.log(this.dataList);
      this.dropDown = new FormControl(this.dataList[0].value);
    }
  } 

  selectedValue(event : any) : void{
    this.changeValue.emit(event.value)
  }
  

}
