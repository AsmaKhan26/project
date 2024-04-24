import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { APIResponse, LoginModel } from '../../core/models/API.Model';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj :LoginModel = new LoginModel();
  
  constructor (private userService: UserService, private router: Router){

  }

  onLogin(){
    debugger;
    this.userService.login(this.loginObj).subscribe((res:APIResponse)=>{
      if(res.result){
        alert("Login Success");
        localStorage.setItem('TicketData', JSON.stringify(res.data));
        this.router.navigateByUrl('/dashboard')
      }else{
        alert(res.message)
      }
    })
  }
}
