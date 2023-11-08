import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public data: any;

  constructor() {
    this.setData();
  }
  public async setData() {
    await axios.post('https://express-pg-register-login.onrender.com/getAllData').then((res) => {
      this.data = res.data;
    })
  }

}
