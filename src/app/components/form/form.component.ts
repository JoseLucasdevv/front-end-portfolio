import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form = new FormGroup({
    formName: new FormControl(''),
    formEmail: new FormControl(''),
    formMessage: new FormControl(''),
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): boolean | void {
    if (!this.form.value.formEmail) return false;
    console.log(this.form.value);
  }

  goToUrl(url: string) {
    window.open(url);
  }
}
