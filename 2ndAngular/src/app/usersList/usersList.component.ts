import { Component, EventEmitter, Input, Output } from "@angular/core";
import { UserInterface } from "../types/user.interface";

@Component({
    selector: 'app-users-list',
    templateUrl: './usersList.component.html',
    styleUrl: './usersList.component.scss',
    standalone: false
})
export class UsersListComponent {
    @Input() users: UserInterface[] = [];
    @Output() removeUserEvent = new EventEmitter<string>();
    @Output() addUserEvent = new EventEmitter();
    newUserName: string = "";

    setNewUserName(userName: Event): void {
        const input = userName.target as HTMLInputElement;
        const value = input?.value || "";
        this.newUserName = value;
    }

    addUser(): void {
        if (this.newUserName !== ""){
            this.addUserEvent.emit(this.newUserName);
            this.newUserName = "";
        }
    }
}