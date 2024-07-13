import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent {
  textInput: string = '';
  public apiUrl = environment.PORTFOLIO_BASEURL;

  constructor(private http: HttpClient) { }

  submitForm() {
    const url = `${this.apiUrl}/text`;

    this.http.post(url, { data: this.textInput }).subscribe({
      next: (response) => {
        console.log('Data saved successfully:', response);
        this.textInput = '';
      },
      error: (error) => {
        console.error('Error saving data:', error);
      },
      complete: () => {
        console.log('Request complete');
      }
    });
  }
}