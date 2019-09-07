import { Component, OnInit } from '@angular/core';
//import { Observable } from "rxjs/Rx"
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  configUrl = "https://reqres.in/api/users?page=2";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  getConfig() {
    let data = this.http.get(this.configUrl)
    debugger
    console.log(data)
    return data;
  }
}
