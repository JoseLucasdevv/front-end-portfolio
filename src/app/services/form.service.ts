import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import { ContactForm } from '../types/form-interface';
import { Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FormService {
  responseSubject = new Subject<Object>();
  responseServerSide = this.responseSubject.asObservable();
  url = environment.urlBackEnd;
  constructor(private _http: HttpClient) {}

  send(formValues: ContactForm) {
    this._http
      .post(`${this.url}/email`, formValues, {
        ...httpOptions,
        responseType: 'text',
      })
      .subscribe((data) => {
        this.responseSubject.next(data);
      });
  }
}
