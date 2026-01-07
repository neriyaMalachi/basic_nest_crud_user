import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'neriya', email: 'neriya@gmail.com' },
    { id: 2, name: 'moshe', email: 'moshe@gmail.com' },
  ];

  findAll() {
    return this.users;
  }
  findOneByID(id: number) {
    return this.users.find((u) => u.id === id);
  }
  create(name: string, email: string) {
    const newUser = {
      id: Date.now(),
      name,
      email,
    };

    this.users.push(newUser);
    return this.users;
  }
  updateUser(id: number, name: string, email: string) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      return null;
    }
    if (user.name) {
      user.name = name;
    }
    if (user.email) {
      user.email = email;
    }
    return this.users;
  }
  deleteUser(id: number) {
    const newUsersArray = this.users.filter((u) => u.id !== id);
    this.users = newUsersArray;
    console.log('users:', this.users);
    return this.users;
  }
}
