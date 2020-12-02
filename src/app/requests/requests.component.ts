import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = new HttpParams();

    // site/items?id=12&name=Tom
    if (this.item.id) {
      // site/items?id=12
      params = params.set('id', this.item.id + '');
    }
    if (this.item.name) {
      // site/items?name=Tom
      params = params.set('name', this.item.name);
    }

    const options = {headers, params};

    this.http.get<Item[]>(url, options).subscribe(
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

    const data = { id: this.item.id, name: this.item.name };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const option = { headers };

    this.http.post<Item>(url, data, option).subscribe(
      result => this.items.push(result),
      error => console.log(error.statusText)
    );
  }

  clearGet(): void {
    this.items.length = 0;
    this.getData();
  }

}
