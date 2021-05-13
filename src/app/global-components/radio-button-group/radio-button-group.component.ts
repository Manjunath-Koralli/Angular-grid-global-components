import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.css']
})
export class RadioButtonGroupComponent implements OnInit {

  @Input() displayFlex : boolean;
  @Input() dataList : any[];
  @Input() disabled : boolean;
  @Input() radioValue: any; 

  @Output() changeRadio = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataList)
  }

  radioChange(event) {
    this.changeRadio.emit({
      'display' : event.value,
      'value' : event.value
    })
  }

}
