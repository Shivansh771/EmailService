import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { JsonPipe, CommonModule } from '@angular/common'; // Import CommonModule
import { EmailService } from '../../service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    CommonModule, // Add CommonModule here
    JsonPipe
  ],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  data = {
    to: '',
    subject: '',
    message: ''
  };
  flag: boolean = false;

  constructor(private email: EmailService, private snack: MatSnackBar) {}

  doSubmitForm() {
    console.log('Form submit');
    console.log('DATA', this.data);

    if (this.data.to === '' || this.data.subject === '' || this.data.message === '') {
      this.snack.open('All fields are required!', 'Close', { duration: 3000 });
      return;
    }
    this.flag = true;
    this.email.sendEmail(this.data).subscribe(
      (response) => {
        this.flag = false;
        console.log(response);
        this.snack.open('Email sent successfully!', 'Close', { duration: 3000 });
      },
      (error) => {
        this.flag = false;
        console.error(error);
        this.snack.open('Failed to send email. Try again later.', 'Close', { duration: 3000 });
      }
    );
  }
}
