import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public data: any;

  constructor(
    private router: Router
  ) {
    this.setData();
  }
  public async setData() {
    await axios.post('http://localhost:3000/getAllData').then((res) => {
      this.data = res.data;
    })
  }
  public async logOut(){
    this.router.navigate(['/login'])
  }

}
