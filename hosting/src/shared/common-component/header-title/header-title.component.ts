import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss']
})
export class HeaderTitleComponent implements OnInit {
  @Input() title: string = 'Sample Heading';

  constructor() { }

  ngOnInit() {
  }

}
