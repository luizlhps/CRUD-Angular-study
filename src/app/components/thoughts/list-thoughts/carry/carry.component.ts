import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carry',
  templateUrl: './carry.component.html',
  styleUrls: ['./carry.component.scss'],
})
export class CarryComponent implements OnInit {
  @Input() haveMoreItens: boolean = false;
  constructor() {}

  ngOnInit() {}
}
