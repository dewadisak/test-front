import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  public async login(){
    const body  = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    };
     axios.post('http://localhost:3000/login', body).then((res) => {
      if(res.status === 200){
        this.router.navigate(['/main'])
      } 
    })
  }
  

}
