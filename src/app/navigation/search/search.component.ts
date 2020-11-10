import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navigation-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output()
  searched: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  search(searchInput: string) {
    this.searched.emit(searchInput)
  }
}
