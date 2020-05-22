import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
    <span><ng-content></ng-content></span>
    <span *ngIf="buttonIcon">i</span>
  `,
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {

  @Input() buttonIcon: string;
  @Input() buttonType: string;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.classList.add('lib-button-base');

    if (this.buttonType) {
      this.elementRef.nativeElement.classList.add(`lib-button--${this.buttonType}`);
    }
    
  }

}
