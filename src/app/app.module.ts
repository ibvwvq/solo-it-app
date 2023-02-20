import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiAlertModule, TuiDialogModule, TuiRootModule} from '@taiga-ui/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TuiInputModule} from '@taiga-ui/kit';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiLabelModule} from '@taiga-ui/core';
import {TuiLinkModule} from '@taiga-ui/core';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiAlertModule,
    TuiDialogModule,
    AppRoutingModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiLabelModule,
    TuiLinkModule
    // ..
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}