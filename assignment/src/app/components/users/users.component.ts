import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users=[
    {name:"Sumit", userName:"Sumit01",email:"abc1@gmail.com"},
    {name:"Amit", userName:"Amit01",email:"abc2@gmail.com"},
    {name:"Ram", userName:"Ram01",email:"abc3@gmail.com"},
    {name:"Shyam", userName:"Shyam01",email:"abc4@gmail.com"},
    {name:"Aditya", userName:"Aditya01",email:"abc5@gmail.com"}
]
  constructor() { }

  ngOnInit(): void {
  }

}
