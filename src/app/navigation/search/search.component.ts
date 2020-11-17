import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchServiceService } from 'src/app/search-service.service';

@Component({
  selector: 'navigation-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output()
  searched: EventEmitter<{title: string, url: string}[]> = new EventEmitter()

  constructor(private searchServ: SearchServiceService) { }

  ngOnInit(): void {
  }

  search(searchInput: string) {

    let results = this.searchServ.search(searchInput)

    this.searched.emit(results)
  }
}
