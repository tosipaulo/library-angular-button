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
    <span class="lib-button__icon" *ngIf="icon">
      <i class="material-icons">{{icon}}</i>
    </span>
    <span><ng-content></ng-content></span>
    <span class="lib-button__total-filter" *ngIf="_totalFilter">[{{_totalFilter}}]</span>
  `,
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input() icon: string;
  @Input() typeStyle: string;
  @Input() type: string;
  @Input() totalFilter: any;

  _totalFilter: number;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

    this.elementRef.nativeElement.classList.add('lib-button__base');

    if (this.type) {
      this.elementRef.nativeElement.classList.add(`lib-button__${this.type}`);
    }

    if (this.typeStyle && this.type) {
      const styles = this.typeStyle.split('.');
      this.elementRef.nativeElement.classList.add(`lib-button__${this.type}__${styles[2]}`);
      this.elementRef.nativeElement.classList.add(`lib-button__${this.type}__${styles[2]}__${styles[0]}`);
      this.elementRef.nativeElement.classList.add(`lib-button__${this.type}__${styles[1]}`);
      
      if(JSON.parse(this.elementRef.nativeElement.getAttribute('disabled'))) {
        console.log(this.elementRef.nativeElement.getAttribute('disabled'))
        this.elementRef.nativeElement.classList.add(`lib-button__${this.type}__${styles[2]}__${styles[0]}--disabled`);
      }

    }

    if (parseInt(this.totalFilter)) { 
      this._totalFilter = parseInt(this.totalFilter);
    }
    
  }

}
