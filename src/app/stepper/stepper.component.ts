import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
[x: string]: any;
  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.pattern('[0-9]{10}')]
  });
  thirdFormGroup = this._formBuilder.group({
    address: [''],
    city: ['']
  });

  constructor(private _formBuilder: FormBuilder) {}
}