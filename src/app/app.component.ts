import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
}

@Component({
  selector: 'app-child',
  template: `
    <span nz-tooltip [nzTooltipTitle]="nzTemplate"
      >Tooltip will show when mouse enter.</span
    >
    <ng-template #nzTemplate>
      <i class="anticon anticon-file"></i> <a href="#/test">test</a>
    </ng-template>

    <input nz-input [(ngModel)]="value" [nzAutocomplete]="auto" />
    <nz-autocomplete
      [nzDataSource]="['12345', '23456', '34567']"
      #auto
    ></nz-autocomplete>
  `,
  styleUrls: ['./app.component.css'],
})
export class ChildComponent implements AfterViewInit {
  name = 'Angular';

  value = '12345';

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.router.navigate(['test']);
    }, 3000);
  }
}

@Component({
  selector: "my-test",
  template: `test`,
  styleUrls: ['./app.component.css'],
})
export class TestComponent {
  name = 'Angular';
}
