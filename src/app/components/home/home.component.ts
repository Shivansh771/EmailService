import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,MatSnackBarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private snack:MatSnackBar){

  }

  btnClick(){
    console.log("Button Click");
    this.snack.open("Hey welcome to this  app","Cancel")
  }

}
