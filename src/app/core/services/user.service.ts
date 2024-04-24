import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Constant } from '../constant/constant';
import { APIResponse, LoginModel, User } from '../models/API.Model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    
  }

  login(obj:LoginModel): Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_END_POINT.LOGIN, obj);
}
}