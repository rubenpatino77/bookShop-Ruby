import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/Auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: '',
  };

  submit() {
  }

  isLoading() {
  }

}
