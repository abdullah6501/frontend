import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addlist-dialog',
  templateUrl: './addlist-dialog.component.html',
  styleUrls: ['./addlist-dialog.component.css']
})
export class AddlistDialogComponent {

  textInput: string = '';
  public apiUrl = environment.PORTFOLIO_BASEURL;

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<AddlistDialogComponent>) { }

  submitForm() {
    const url = `${this.apiUrl}/text`;

    this.http.post(url, { data: this.textInput }).subscribe({
      next: (response) => {
        console.log('Data saved successfully:', response);
        this.textInput = '';
        this.dialogRef.close(); // Close dialog after successful submission
      },
      error: (error) => {
        console.error('Error saving data:', error);
      },
      complete: () => {
        console.log('Request complete');
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
