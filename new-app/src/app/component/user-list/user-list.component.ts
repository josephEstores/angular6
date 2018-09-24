import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private api: ApiService) { }
  users;
  ngOnInit() {
    this.api.get("users").subscribe((data)=>{
      this.users = data;
      console.log("USERS",this.users)
    });
  }

  getValue(name) {
    alert(name);
  }

}
