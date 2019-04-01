import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { ShowTaskComponent } from './show-task/show-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
