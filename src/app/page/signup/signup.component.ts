import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  form = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },
    {
      validator: (form: FormGroup) => {
        const passowrd = form.get('password')?.value || '';
        const confirmPassword = form.get('confirmPassword')?.value || '';

        return passowrd === confirmPassword ? null : { notMatch: true };
      },
    }
  );

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit() {
    if (this.form.invalid) return;
    // console.log(this.form.value);

    this.authService.signup(this.form.value).subscribe((user) => {
      alert('Dang ki thanh cong');
      console.log(user);
      // this.router.navigateByUrl('/list');
    });
  }
}
