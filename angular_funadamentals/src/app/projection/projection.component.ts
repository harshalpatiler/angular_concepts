import { Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.scss']
})
export class ProjectionComponent {
@ContentChild('para') projectedContentRef:ElementRef
@Input() msg: string;
projectedContent(){
  console.log(this.projectedContentRef);
}
ngOnChanges() {
  console.log('ngOnchages hook of app component is called!');
  console.log(this.msg)
}
}
