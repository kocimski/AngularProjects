import { Component } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent {
 accounts: {name: string, status: string} [] = [];

constructor(private accountsService: AccountsService){
    this.accounts = this.accountsService.accounts;
}
}
