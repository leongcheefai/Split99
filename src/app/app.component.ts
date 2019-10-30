import { Component } from '@angular/core';
import { UpdateService } from './services/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bill-splitter';

  constructor(private updateService: UpdateService) {
  }
}
