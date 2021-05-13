import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridSharedService } from 'src/app/common/grid-shared.service';

@Component({
  selector: 'app-grid-global',
  templateUrl: './grid-global.component.html',
  styleUrls: ['./grid-global.component.css']
})
export class GridGlobalComponent implements OnInit {

  @Input() actionOptions;
  @Output() export = new EventEmitter();

  public pageSizeDrop : any;

  pageSize = [
    {
      value : 25,
      display : '25 rows'
    },
    {
      value : 50,
      display : '50 rows'
    },    
    {
      value : 100,
      display : '100 rows'
    },
    {
      value : 500,
      display : '500 rows'
    },
    {
      value : 1000,
      display : '1000 rows'
    }
  ]

  constructor(private gridSharedService : GridSharedService) { }

  ngOnInit(): void {
    this.pageSizeDrop = this.pageSize[0].value;
  }

  onPageSizeChanged(event){
    console.log(event)
    let pazeSizeValue = event;
    this.gridSharedService.updateRowSetterSize(pazeSizeValue);
  }

  onBtnExport(){
    this.export.emit();
  }

}
