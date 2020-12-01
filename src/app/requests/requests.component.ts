import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from './item'

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  items: Item[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getData(): void {
    this.http.get<Item[]>('/items').subscribe(
      result => this.items = result,
      error => console.log(error.statusText)
    );
  }

}
