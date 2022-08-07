import { Component } from '@angular/core';
import { add } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-test-project';
  lastMeasureDate = 1641194489340;


  ngOnInit(){
    console.log(add(this.lastMeasureDate,{
      months:-6,
    }))
  }
}
