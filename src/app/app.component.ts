import { Component, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';

import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-project';
  users = DUMMY_USERS;
  selectedId?: string;

  get selectedUser() {
    return this.users.find(item => item.id === this.selectedId);
  }

  onSelectedUser(id: string) {
    console.log('emit id value', id)
    this.selectedId = id;
  }
}
