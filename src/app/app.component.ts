import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

// import { RainbowDirective } from './Rainbow.directive';
import { MustMatch } from './url.validator';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  registerForm : FormGroup;
  submitted: boolean;
  storedFormValue: any;
  constructor( private fb: FormBuilder){}
  ngOnInit() {
        this.registerForm = this.fb.group({
          firstName: ['' , Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
        //  this.registerForm = new FormGroup({
        //     firstName: new FormControl('', [Validators.required]),
        //     lastName: new FormControl('', [Validators.required]),
        //     email: new FormControl('', [Validators.required, Validators.email]),
        //     password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        //     confirmPassword: new FormControl('', [
        //       Validators.required,
        //     ValidateUrl])
        // });
    }
     // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        // check if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
        this.storedFormValue = this.registerForm.value;
    }

}