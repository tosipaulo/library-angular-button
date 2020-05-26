import { 
  Component, 
  OnInit, 
  Input, 
  ElementRef, 
  ViewEncapsulation, 
  ChangeDetectionStrategy,
  SimpleChanges,
  OnChanges
} from '@angular/core';


@Component({
  selector: 'button[lib-button], a[lib-button], lib-button',
  template: `
    <span [class.lib-button__hide]="load" class="lib-button__icon" *ngIf="icon">
      <i class="material-icons">{{icon}}</i>
    </span>
    <span [class.lib-button__hide]="load"><ng-content></ng-content></span>
    <span [class.lib-button__hide]="load" class="lib-button__total-filter" *ngIf="_totalFilter">[{{_totalFilter}}]</span>
    <div [class.lib-button__hide]="!load" *ngIf="load" class="lib-button__box-load">
      <span class="lib-button__load"></span>
    </div>
  `,
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit, OnChanges {

  @Input() icon: string;
  @Input() typeStyle: string;
  @Input() type: string;
  @Input() totalFilter: any;
  @Input() load: any;

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

    if(this.load) {
      console.log(this.load);
    }
    
  }

  ngOnChanges(changes: SimpleChanges) {

    console.log(changes['load']);

  }

}
