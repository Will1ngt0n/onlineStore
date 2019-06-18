import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** Added by me */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
/** All in one */
import {MatButtonModule, MatCardModule, MatListModule, MatGridListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    /** Added by me */
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
export class PizzaPartyAppModule {}
