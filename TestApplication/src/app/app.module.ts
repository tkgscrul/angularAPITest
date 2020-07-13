import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { StudentP1Component } from './student-p1/student-p1.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MissionP3Component } from './mission-p3/mission-p3.component';
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    StudentP1Component,
    FilterPipe,
    MissionP3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
