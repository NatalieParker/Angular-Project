import { Component } from '@angular/core';
import { UserInterface } from './types/user.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '2ndAngular';

  users: UserInterface[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log("ngOnInittt");
    this.http
    .get<UserInterface[]>('http://localhost:3000/users')
    .subscribe((users: UserInterface[]) => {
      console.log('users', users);
      this.users = users;
    })
  }

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
