import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-link',
  templateUrl: './filter-link.component.html',
  styleUrls: ['./filter-link.component.scss']
})
export class FilterLinkComponent implements OnInit {
  @Input() active: boolean;

  constructor() { }

  ngOnInit() {}
}
