import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { createThis } from 'typescript';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLogo: string = '';
  constructor(private authService: AuthService) { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    console.log(1111,user);
    
    if (user!=='') {
      console.log(user);
      
      const userInitials = (user.split(' ')[0][1] + user.split(' ')[1][0]).toUpperCase();
      this.userLogo = userInitials;
    } else {
      this.authService.userLogo.subscribe(res => this.userLogo = res)
    }
  }

  signOut() {
    this.authService.signOut();
  }
}
