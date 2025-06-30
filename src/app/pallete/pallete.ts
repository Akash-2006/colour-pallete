import { Component, inject, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ColoursService } from '../colours.service';
import { Color } from '../color.type';

@Component({
  selector: 'app-pallete',
  imports: [NgStyle],
  templateUrl: './pallete.html',
  styleUrl: './pallete.css',
})
export class Pallete {
  private readonly colourService = inject(ColoursService);
  @Input({ required: true }) colour?: Color;
  selectColour() {
    if (!this.colour) {
      return;
    }
    this.colourService.changePallete(this.colour);
  }
}
