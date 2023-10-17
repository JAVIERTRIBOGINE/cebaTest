import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USERS } from 'src/app/users.const';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = USERS


  // getCapitalizeFirstWord(name: string): string {
  //   return name.split(' ').map(n => n.substring(0, 1).toUpperCase() + n.substring(1).toLowerCase()).join(' ');
  // }
}


