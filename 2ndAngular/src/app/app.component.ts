import { Component } from '@angular/core';
import { UserInterface } from './types/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '2ndAngular';
  users: UserInterface[] = [
    {
        id: '1',
        name: "John",
        age: 13
    },
    {
        id: '2',
        name: "Rose",
        age: 15
    },
    {
        id: '3',
        name: "Dave",
        age: 17
    },
    {
        id: '4',
        name: "Jade",
        age: 19
    }
  ];

  removeUser(id: string): void {
    this.users = this.users.filter(user => user.id !== id)
  }

  addUser(name: string): void {
        const uniqueId = Math.random().toString(16);
        const newUser = {
            id: uniqueId,
            name,
            age: 30
        };
        this.users.push(newUser);
  }
}
