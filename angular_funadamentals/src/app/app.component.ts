import { Component, ElementRef, OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  message: string;
  constructor() {
    console.log('Constructor of app component is called!');
    //console.log(this.message);
  }
  ngOnChanges() {
    console.log('ngOnchages hook of app component is called!');
    console.log(this.message);
  }

  @ViewChild('para') paraRef: ElementRef;
  getRef() {
    console.log(this.paraRef);
  }
  sendToChild(val) {
    this.message = val;
  };
  ngOnInit(){
    console.log("ngOnInit lifecycle hook of app component is called!")
  }
  ngDoCheck(){
      console.log("ngDoCheck lifecycle hook of app component is called!")
    }
}
