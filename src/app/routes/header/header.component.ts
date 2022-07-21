import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'inv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() showToggle = true;
  @Input() showBranding = false;

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleSidenavNotice = new EventEmitter<void>();

  

  constructor() { }

  ngOnInit() {
  }

}