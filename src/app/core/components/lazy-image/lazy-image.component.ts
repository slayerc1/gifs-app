import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css',
})
export class LazyImageComponent {
  @Input()
  public url!: string;
  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('Url is mandatory');
  }

  onLoad() {
    this.hasLoaded = true;
  }
}
