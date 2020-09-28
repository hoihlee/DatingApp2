import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  constructor(private authService: AuthService) { }

  model: any = {};

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(() => {
      console.log('Registration successful.');
    }, error => {
      console.log(error);
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('Registion cancalled');
  }
}
