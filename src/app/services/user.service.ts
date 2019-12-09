import { User } from '../models/User.model';
import { Subject } from 'rxjs/internal/Subject';

export class UserService {
  private users: User[] = [
    {
      firstName: 'hamza',
      lastName: 'bed',
      email: 'hamza@bedwi.com',
      drinkPreference: 'coca',
      hobbies: [
          'coder',
          'la degustation'
    ]
  }
  ];
  userSubject = new Subject<User[]>();

  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }

}
