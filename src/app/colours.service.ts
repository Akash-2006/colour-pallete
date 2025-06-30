import { Injectable, signal, WritableSignal } from '@angular/core';
import { Color } from './color.type';

@Injectable({
  providedIn: 'root',
})
export class ColoursService {
  private readonly colours: Color[] = [
    { name: 'Sunset', colour: ['#FF5E62', '#FF9966'] },
    { name: 'Ocean', colour: ['#0077be', '#00c6fb'] },
    { name: 'Forest', colour: ['#0B6623', '#7BA05B'] },
    { name: 'Lavender', colour: ['#B57EDC', '#E6E6FA'] },
    { name: 'Fire', colour: ['#FF512F', '#F09819'] },
    { name: 'Ice', colour: ['#74ebd5', '#ACB6E5'] },
    { name: 'Peach', colour: ['#FFDAB9', '#FF7F50'] },
    { name: 'Night Sky', colour: ['#0F2027', '#2C5364'] },
    { name: 'Mint', colour: ['#98FF98', '#66CDAA'] },
    { name: 'Sand', colour: ['#EDC9AF', '#C2B280'] },
    { name: 'Aurora', colour: ['#FF9A9E', '#FAD0C4'] },
    { name: 'Galaxy', colour: ['#654EA3', '#EAafc8'] },
    { name: 'Emerald', colour: ['#50C878', '#008000'] },
    { name: 'Sunrise', colour: ['#FFCF71', '#2376DD'] },
    { name: 'Blush', colour: ['#FF6F91', '#FF9671'] },
    { name: 'Amethyst', colour: ['#9D50BB', '#6E48AA'] },
    { name: 'Coral Reef', colour: ['#FF7E5F', '#FEB47B'] },
    { name: 'Skyline', colour: ['#1488CC', '#2B32B2'] },
    { name: 'Meadow', colour: ['#56ab2f', '#a8e063'] },
    { name: 'Rose Gold', colour: ['#B76E79', '#FFC1CC'] },
    { name: 'Dusk', colour: ['#2C3E50', '#FD746C'] },
    { name: 'Aurora Borealis', colour: ['#00C9FF', '#92FE9D'] },
    { name: 'Berry', colour: ['#8E2DE2', '#4A00E0'] },
    { name: 'Flamingo', colour: ['#F7797D', '#FBD786'] },
  ];

  readonly currentPallete: WritableSignal<Color> = signal(this.colours[0]);

  fetchColours() {
    return this.colours;
  }

  changePallete(colour: Color) {
    this.currentPallete.set(colour);
  }
}
