import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserResponseModel } from '../model/userResponse.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrlEndPoint: string='api/users';
  // apiUrlEndPoint1: string ='users/add';
  baseUrl: string= environment.baseUrl;


  constructor(
    private httpClient: HttpClient,
  ) { }

  addUsers(user: any): Observable<any> {
     return this.httpClient.post<any>(this.baseUrl.concat(this.apiUrlEndPoint), user);
   }

  listAllUsers(): Observable<UserResponseModel[]> {
    return this.httpClient.get<UserResponseModel[]>(this.baseUrl.concat(this.apiUrlEndPoint));
  }

  onDelete(id: any): Observable<any> {
    return this.httpClient.delete<UserResponseModel>(`${this.baseUrl.concat(this.apiUrlEndPoint)}/${id}`);
}

onView(id: any): Observable<any> {
  return this.httpClient.get<UserResponseModel>(`${this.baseUrl.concat(this.apiUrlEndPoint)}/${id}`);
}

onEdit(data: UserResponseModel, userId: any): Observable<any> {
  return this.httpClient.put<UserResponseModel>(this.baseUrl.concat(this.apiUrlEndPoint).concat('/'+ userId), data);
}

getUserDetailsById(id: any): Observable<UserResponseModel> {
  return this.httpClient.get<UserResponseModel>(this.baseUrl.concat(this.apiUrlEndPoint).concat('/' + id));
}

}
