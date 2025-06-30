import {Component, inject} from '@angular/core';
import {ColoursService} from '../colours.service';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-output',
  imports: [
    NgStyle
  ],
  templateUrl: './output.html',
  styleUrl: './output.css'
})
export class Output {
  private readonly colourService = inject(ColoursService);
  colour = this.colourService.currentPallete;
}
