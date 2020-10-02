import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  model: any = {};

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(() => {
      // console.log('Registration successful.');
      this.alertify.success('Registration successful.');
    }, error => {
      // console.log(error);
      this.alertify.error(error);
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
    // console.log('Registion cancalled');
    this.alertify.message('Registration cancelled.');
  }
}
