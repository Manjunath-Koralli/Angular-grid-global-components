import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GridGlobalComponent } from './global-components/grid-global/grid-global.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownComponent } from './global-components/drop-down/drop-down.component';
import { MatSelectModule } from '@angular/material/select';
import { IonicModule } from '@ionic/angular';
import { GridConstants } from './util/grid-constants';


@NgModule({
  declarations: [
    AppComponent,
    GridGlobalComponent,
    DropDownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSelectModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    IonicModule.forRoot()
  ],
  providers: [
    GridConstants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
