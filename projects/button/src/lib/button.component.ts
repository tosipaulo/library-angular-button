import { 
  Component, 
  OnInit, 
  Input, 
  ElementRef, 
  ViewEncapsulation, 
  ChangeDetectionStrategy
} from '@angular/core';


@Component({
  selector: 'button[lib-button], a[lib-button], lib-button',
  template: `
    <span class="lib-button-icon" *ngIf="buttonIcon">
      <i class="material-icons">{{buttonIcon}}</i>
    </span>
    <span><ng-content></ng-content></span>
    <span *ngIf="totalFilter">[{{totalFilter}}]</span>
  `,
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input() buttonIcon: string;
  @Input() buttonType: string;
  @Input() buttonTotalFilter: any;

  totalFilter: number;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    
    this.elementRef.nativeElement.classList.add('lib-button-base');

    if (this.buttonType) {
      this.elementRef.nativeElement.classList.add(`lib-button--${this.buttonType}`);
    }

    if (parseInt(this.buttonTotalFilter)) { 
      this.totalFilter = parseInt(this.buttonTotalFilter);
    }
    
  }

}
