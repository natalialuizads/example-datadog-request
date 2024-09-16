import {
  AfterContentInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  LoadRemoteModuleOptions,
  loadRemoteModule,
} from '@angular-architects/module-federation-runtime';
import { CommonModule } from '@angular/common';

export type WebComponentWrapperOptions = LoadRemoteModuleOptions & {
  elementName: string;
};
@Component({
  selector: 'mfe-wrapper',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: '<div #vc></div>',
})
export class MfeWrapperComponent implements AfterContentInit, OnChanges {
  @ViewChild('vc', { read: ElementRef, static: true })
  vc!: ElementRef;

  @Input() options!: WebComponentWrapperOptions;
  @Input() props!: { [prop: string]: unknown };
  @Input() events!: { [event: string]: (event: Event) => void };

  element!: HTMLElement;

  constructor(private route: ActivatedRoute) {}

  ngOnChanges(): void {
    if (!this.element) return;

    this.populateProps();
  }

  private populateProps() {
    for (const prop in this.props) {
      (this.element as any)[prop] = this.props[prop];
    }
  }

  private setupEvents() {
    for (const event in this.events) {
      this.element.addEventListener(event, this.events[event]);
    }
  }

  async ngAfterContentInit() {
    const options =
      this.options ?? (this.route.snapshot.data as WebComponentWrapperOptions);

    try {
      await loadRemoteModule(options);

      this.element = document.createElement(options.elementName);
      this.populateProps();
      this.setupEvents();

      this.vc.nativeElement.appendChild(this.element);
    } catch (error) {
      console.error(error);
    }
  }
}
