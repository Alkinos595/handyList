import { Component } from '@angular/core';
import { CardListComponent } from '../card-list/card-list.component';

@Component({
  selector: 'app-completed',
  standalone: true,
  imports: [CardListComponent],
  templateUrl: './completed.component.html'
})
export class CompletedComponent {

}
