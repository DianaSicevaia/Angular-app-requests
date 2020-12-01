import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from './item';

const url = '/items';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  
  item: Item = { id: null, name: null};
  items: Item[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.http.get<Item[]>(url).subscribe(
      result => this.items = result,
      error => console.log(error.statusText)
    );
  }

  postData(): void | boolean {
    if (!this.item.id || !this.item.name) {
      alert('Поля ID и/или Name не заполнены');
      return false;
    } else if (this.item.id < this.items[this.items.length - 1].id) {
      alert('Введенный ID уже существует');
      return false;
    }

    this.http.post<Item>(url, {
      id: this.item.id,
      name: this.item.name
    }).subscribe(
      result => this.items.push(result),
      error => console.log(error.statusText)
    );
  }

  clearGet(): void {
    this.items.length = 0;
    this.getData();
  }

}
