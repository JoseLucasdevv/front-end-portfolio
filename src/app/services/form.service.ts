import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import { ContactForm } from '../types/form-interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FormService {
  url = environment.urlBackEnd;
  constructor(private _http: HttpClient) {}

  send(formValues: ContactForm) {
    this._http
      .post<ContactForm>(`${this.url}/email`, formValues, httpOptions)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
