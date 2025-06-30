import {Component, inject} from '@angular/core';
import {Pallete} from './pallete/pallete';
import {Output} from './output/output';
import {ColoursService} from './colours.service';

@Component({
  selector: 'app-root',
  imports: [
    Pallete,
    Output
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'color';
  private readonly colourService = inject(ColoursService);
  colours = this.colourService.fetchColours();
}
