import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solo-app';
  testForm = new FormGroup({
    Email: new FormControl(''),
    Api:new FormControl('')
  });
}
