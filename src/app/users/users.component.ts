import { Component, signal, computed, Input, input, Output, EventEmitter, output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { CardComponent } from "../shared/card/card.component";

interface User {
  id: string,
  name: string,
  avatar: string
}

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent {
  @Input({ required: true}) user!: User;
  @Input({ required: true}) isSelected!: boolean;
  // @Input() id!: string;
  // @Input() avator!: string;
  // @Input() name!: string;
  @Output() select = new EventEmitter();
  // selectT = output<string>(); inbuilt function with no custom event.

  get getImagePath() {
    return `assets/users/${this.user.avatar}`
  }

  // signals input
  // avator = input.required<string>();
  // name = input.required<string>();
  // getImagePath = computed(() => `assets/users/${this.avator()}`);

  

  onClickSelectedUser() {
    this.select.emit(this.user.id)
  }

  //with signal
  // selectedUser = signal(DUMMY_USERS[randomId]);
  // getImagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  // get getImagePath(){
  //   return `assets/users/${this.selectedUser().avatar}`
  // }

  // onClickSelectedUser(){
  //   console.log('clicked')
  //   const randomId = Math.floor(Math.random() * DUMMY_USERS.length)
  //   this.selectedUser.set(DUMMY_USERS[randomId])
  // }
}
