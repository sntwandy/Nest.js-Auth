import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Megan Herrera',
      username: 'meganhrra',
      password: 'sosecure',
    },
    {
      id: 2,
      name: 'Darcy Herrera',
      username: 'darcyhrra',
      password: 'bigboy',
    },
    {
      id: 3,
      name: 'Wandy Santana',
      username: 'sntwandy',
      password: 'notsosecure',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
