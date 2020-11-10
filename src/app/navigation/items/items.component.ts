import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input()
  items: string[]

  constructor() { }

  ngOnInit(): void {
  }

}
