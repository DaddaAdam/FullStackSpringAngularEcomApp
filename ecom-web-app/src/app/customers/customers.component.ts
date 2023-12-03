import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{
  customers: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:9999/customer-service/customers?projection=fullCustomer').subscribe(data => {
      console.log(data);
      this.customers = data;
    });
  }
}
