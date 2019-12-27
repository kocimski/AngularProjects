import { Component, Input} from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UsersService){}
  
  ngOnInit(){
    this.users=this.usersService.inactiveUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
   
  }
}
