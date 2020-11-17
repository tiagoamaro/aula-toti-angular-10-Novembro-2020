import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItems = ["Produtos", "Biscoitos", "Chocolates"]
  searchResults: {title: string, url: string}[] = []

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(searchResults) {
    this.searchResults = searchResults
  }
}
