import { Component } from "@angular/core";

@Component({
    selector: 'app-users-list',
    templateUrl: './usersList.component.html',
    standalone: false
})
export class UsersListComponent {
    // testUsers = ["Dave", "John", "Jake", "Dirk"];
    users = [
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
    ]
}