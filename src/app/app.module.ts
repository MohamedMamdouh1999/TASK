import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SecondNavComponent } from './components/second-nav/second-nav.component';
import { ThirdNavComponent } from './components/third-nav/third-nav.component';
import { DealsComponent } from './components/deals/deals.component';
import { HttpClientModule } from '@angular/common/http';
import { DealComponent } from './components/deal/deal.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SecondNavComponent,
    ThirdNavComponent,
    DealsComponent,
    DealComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ProgressbarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
