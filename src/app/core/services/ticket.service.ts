import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Constant } from '../constant/constant';
import { APIResponse, User } from '../models/API.Model';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  getAllTicket(): Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_END_POINT.GET_USER);
}
  createNewUser(obj:User): Observable<APIResponse> {
     return this.http.post<APIResponse>(environment.API_URL + Constant.API_END_POINT.CREATE_USER, obj);
}
  updateUser(obj:User): Observable<APIResponse> {
    return this.http.put<APIResponse>(environment.API_URL + Constant.API_END_POINT.UPDATE_USER, obj);
}
  deleteUser(id: number): Observable<APIResponse> {
     return this.http.delete<APIResponse>(environment.API_URL + Constant.API_END_POINT.DELETE_USER + id);
}

}
