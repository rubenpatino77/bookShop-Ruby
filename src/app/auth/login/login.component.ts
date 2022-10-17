import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CartService } from 'src/app/services/cart.service';
import { DbService } from 'src/app/services/db.service';
import { LoginForm } from 'src/app/types/Auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private app: AppComponent,private cartService: CartService, private dbService: DbService) { }

  ngOnInit(): void {
  }

  form:  LoginForm = {
    email: '',
    password:''
  }

  async submit() {
    
    await this.authService.login(this.form);
    if(!this.cartService.isUpdated && this.app.isAuthenticated()){
      this.cartService.getUserCart(this.app.db, this.authService.currentUserEmail);
    }
  }

  isLoading() {
    return this.authService.isLoading;
  }

}
