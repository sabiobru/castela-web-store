import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-site-navbar',
  templateUrl: './site-navbar.component.html',
  styleUrls: ['./site-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteNavbarComponent implements OnInit {
  checked = 0;
  ngDoCheck() {
    console.log(++this.checked);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
