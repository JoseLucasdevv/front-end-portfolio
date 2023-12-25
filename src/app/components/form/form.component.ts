import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FormService } from 'src/app/services/form.service';
import { Errors } from 'src/app/types/errors-interface';
import { ContactForm } from 'src/app/types/form-interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  errorsMsg: Errors = {
    msgEmail: 'Enter a Valid Email',
    msgMinLength: 'The minimum number of characters is 6',
    msgMaxLength: 'Maximum characters is 200',
    msgRequired: 'Input cannot be empty',
  };

  valuesForm!: ContactForm;

  constructor(
    private _formService: FormService,
    private _formBuilder: FormBuilder,
    private _translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      formName: ['', Validators.required],
      formEmail: ['', [Validators.required, Validators.email]],
      formMessage: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(200),
        ],
      ],
    });
  }

  onSubmit(): void | boolean {
    if (this.form.status === 'INVALID') {
      let msgError;
      this._translate.get('alert-error').subscribe((data) => {
        msgError = data;
      });
      alert(msgError);
      return false;
    }

    this._formService.send(this.form.value);
    let msgSucess;
    this._translate.get('alert-sucess').subscribe((data) => {
      msgSucess = data;
    });

    alert(msgSucess);

    this.form.reset();
  }

  goToUrl(url: string) {
    window.open(url);
  }
}
