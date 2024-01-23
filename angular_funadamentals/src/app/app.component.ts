import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 @ViewChild('para') paraRef:ElementRef;
 getRef(){
  console.log(this.paraRef);
 }
}
