import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { UserInterface } from "../types/user.interface";

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<UserInterface[]> {
        return this.http
            .get<UserInterface[]>('http://localhost:3000/users').pipe(
                map((users: UserInterface[]) => {
                    return users.map(user => ({
                        id: user.id,
                        name: user.name,
                        age: user.age
                    }))
                }),
            );
    }

    removeUser(id: string): Observable<{}> {
        return this.http.delete('http://localhost:3000/users/' + id);
        // return this.http.get<UserInterface[]>(id);
    }

    addUser(name: string): Observable<UserInterface> {
        const user = {
            name,
            age: 30
        }
        return this.http
            .post<UserInterface>('http://localhost:3000/users', user);
    }
}