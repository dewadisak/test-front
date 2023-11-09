import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

})
export class RegisterComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  public success: boolean = false;
  public unSuccess: boolean = false;
  public checkValidate: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router

  ) {
    
  }

  ngOnInit(): void {
    
  }


  public async submit(){
    const body  = {
      name: this.form.get('name')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      phoneNumber: this.form.get('phoneNumber')?.value,
    };
    console.log(body)
    if(body.name && body.email && body.password && body.phoneNumber){
      await axios.post('http://localhost:3000/register', body).then((res) => {
        if(res.status === 200){
          this.success = true;
          this.router.navigate(['/login'])
        } 
      }).catch((error) => {
        console.log(error)
        this.unSuccess = true;
      })
    } else {
      this.checkValidate = true;
    }

  }

  public toLogin(){
    this.router.navigate(['/login'])
  }


}
