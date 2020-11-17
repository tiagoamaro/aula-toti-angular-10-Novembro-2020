import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor() { }

  search(searchTerm: string): {title: string, url: string}[]  {

    return [
      {
        title: 'Pipoca',
        url: 'https://localhost:8080/pipoca'
      },
      {
        title: 'Chocolate',
        url: 'https://localhost:8080/chocolate'
      }
    ]

  }

}
