import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.scss']
})
export class ProjectionComponent {
@ContentChild('para') projectedContentRef:ElementRef

projectedContent(){
  console.log(this.projectedContentRef);
}
}
