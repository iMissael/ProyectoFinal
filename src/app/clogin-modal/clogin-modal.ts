import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-clogin-modal',
  imports: [FormsModule, CommonModule],
  templateUrl: './clogin-modal.html',
  styleUrl: './clogin-modal.css'
})
export class CLoginModal {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() loginSuccess = new EventEmitter<any>(); // Puedes emitir datos del usuario si el login es exitoso

  constructor() { }
  
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  login(): void {
    // Aquí iría tu lógica de autenticación
    console.log('Intentando iniciar sesión con:', this.email, this.password);
    // Simular un inicio de sesión exitoso
    if (this.email === 'test@test.com' && this.password === 'password') {
      this.loginSuccess.emit({ message: 'Login exitoso' });
      this.closeModal(); // Cierra el modal después de un login exitoso
    } else {
      alert('Credenciales incorrectas');
    }
  }

}
