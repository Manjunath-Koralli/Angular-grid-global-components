import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'ag-grid-enterprise';
import { GridSharedService } from './common/grid-shared.service';
import { GridConstants } from './util/grid-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'grid-global';
  gridApi;
  gridColumnApi;
  columnDefs;
  columnDefsSort;
  defaultColDef;
  rowData: any = [];
  sideBar;
  paginationPageSize;
  pagination = true;
  resultLength;
  icons;

  actionOptions: any = {
    gridHeading: true,
    gridText: 'Grid Global',
    showQuickFind: true,
    pageRowSetter: true
  }

  displayedColumnsSelected: boolean = false;
  allColumnsSelected: boolean = false;
  showOptions: boolean = false;

  radioOptions= [
    {
      value: 'DisplayedColumns',
      display: 'Displayed Columns'
    },
    {
      value: 'AllColumns',
      display: 'All Columns'
    }
  ]

  constructor(private http: HttpClient, private gridSharedService: GridSharedService, private gridConstants: GridConstants) {

    this.defaultColDef = {
      flex: 1,
      minWidth: 150,
      filter: false
    }

    this.columnDefs = [
      {
        headerName: 'Athlete',
        field: 'athlete',
        filter: true,
        floatingFilter: true,
        sortable: true,
        minWidth: 200
      },
      {
        headerName: 'Age',
        field: 'age',
        filter: true,
        floatingFilter: true,
        sortable: true
      },
      {
        headerName: 'Country',
        field: 'country',
        filter: true,
        floatingFilter: true,
        sortable: true,
        minWidth: 200
      },
      {
        headerName: 'Year',
        field: 'year',
        filter: true,
        floatingFilter: true,
        sortable: true
      },
      {
        headerName: 'Sport',
        field: 'sport',
        filter: true,
        floatingFilter: true,
        sortable: true,
        minWidth: 200
      },
      {
        headerName: 'Gold',
        field: 'gold',
        filter: true,
        floatingFilter: true,
        sortable: true
      },
      {
        headerName: 'Silver',
        field: 'silver',
        filter: true,
        floatingFilter: true,
        sortable: true
      },
      {
        headerName: 'Bronze',
        field: 'bronze',
        filter: true,
        floatingFilter: true,
        sortable: true
      },
      {
        headerName: 'Total',
        field: 'total',
        filter: true,
        floatingFilter: true,
        sortable: true
      },
    ];

    this.columnDefsSort = [
      {
        field: 'athlete',
        filter: true,
        floatingFilter: true
      },
      {
        field: 'age',
        maxWidth: 100,
        filter: 'agNumberColumnFilter',
      },
      {
        field: 'bronze',
        filter: 'agNumberColumnFilter',
      },
      {
        field: 'country',
        filter: 'agSetColumnFilter',
      },
      {
        field: 'gold',
        filter: 'agNumberColumnFilter',
      },
      {
        field: 'sport',
        filter: true,
        floatingFilter: true
      },

      {
        field: 'silver',
        filter: 'agNumberColumnFilter',
      },

      {
        field: 'total',
        filter: 'agNumberColumnFilter',
      },
      {
        field: 'year',
        filter: 'agSetColumnFilter',
        maxWidth: 100,
      }
    ];

    this.sideBar = {
      toolPanels: [
        {
          id: 'columns',
          labelDefault: 'Edit Columns',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel',
          toolPanelParams: {
            suppressRowGroups: true,
            suppressValues: true,
            suppressPivots: true,
            suppressPivotMode: true,
            suppressSyncLayoutWithGrid: true
          }
        },
      ]
    };
  }

  ngOnInit(): void {
    //this.rowData = this.http.get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json');
    this.icons = this.gridConstants.getIcons();
    
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.paginationSetPageSize(Number(this.paginationPageSize));
    var columnToolPanel = this.gridApi.getToolPanelInstance('columns');
    columnToolPanel.setColumnLayout(this.columnDefsSort);

    this.http.get('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .subscribe((data: any[]) => {
        this.resultLength = data.length;
        this.rowData = data;
      });

    this.gridSharedService.rowSetterPerPage.subscribe(pageSizeValue => {
      this.paginationPageSize = pageSizeValue;
      this.gridApi.paginationSetPageSize(Number(this.paginationPageSize));
    });

  }

  recordsPerPageGrid(evt) {
    let totalPageSize = this.gridApi.paginationGetTotalPages();
    if (evt < totalPageSize) {
      this.gridApi.pagginationGoToPage(evt);
    }
    else {
      alert("Invalid Page Number")
    }
  }

  exportGrid(evt) {
    var showPopUp = confirm("Show PopUp ? ");
    if (showPopUp) {
      this.showOptions = true;
    }
    else {
      this.showOptions = false;
      let dateObj = new Date();
      let month = dateObj.getUTCMonth() + 1;
      let day = dateObj.getUTCDate();
      let year = dateObj.getUTCFullYear();

      let params = {
        fileName: "Grid_Result_" + year + "_" + month + "_" + day + "_" + new Date().getHours() + "_" + new Date().getMinutes() + "_" + new Date().getSeconds() + ".xls",
        sheetName: "First Sheet"
      }

      this.gridApi.exportDataAsExcel(params);
    }


  }

  changedRadio(event) {
    if (event.value === "DisplayedColumns") {
      this.displayedColumnsSelected = true;
      this.allColumnsSelected = false;
    }
    else if (event.value === "AllColumns") {
      this.displayedColumnsSelected = false;
      this.allColumnsSelected = true;
    }
  }

  onBtnExport() {
    if (this.allColumnsSelected) {
      let dateObj = new Date();
      let month = dateObj.getUTCMonth() + 1;
      let day = dateObj.getUTCDate();
      let year = dateObj.getUTCFullYear();

      let params = {
        allColumns : true,
        fileName: "Grid_Result_" + year + "_" + month + "_" + day + "_" + new Date().getHours() + "_" + new Date().getMinutes() + "_" + new Date().getSeconds() + ".xls",
        sheetName: "First Sheet"
      }
      this.gridApi.exportDataAsExcel(params);
      this.showOptions = false;
    }
    else if (this.displayedColumnsSelected) {
      let dateObj = new Date();
      let month = dateObj.getUTCMonth() + 1;
      let day = dateObj.getUTCDate();
      let year = dateObj.getUTCFullYear();

      let params = {
        fileName: "Grid_Result_" + year + "_" + month + "_" + day + "_" + new Date().getHours() + "_" + new Date().getMinutes() + "_" + new Date().getSeconds() + ".xls",
        sheetName: "First Sheet"
      }
      this.gridApi.exportDataAsExcel(params);
      this.showOptions = false;
    }
  }

  cancel() {
    this.showOptions = false;
  }

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];



}
