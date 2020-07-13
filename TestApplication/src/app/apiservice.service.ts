import { Injectable } from '@angular/core';
import { Mission } from './mission';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
Mission
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  //Mission CRUD
  getallMission():Observable<Mission[]>{
    return this.http.get<Mission[]>(`${environment.ApiUrl}/Mission`)
  }

  getMissionbyid(id):Observable<Mission>{
    return this.http.get<Mission>(`${environment.ApiUrl}/Mission/${id}`)
  }

  putMissionbyid(id,newMission:Mission){
    return this.http.put<Mission>(`${environment.ApiUrl}/Mission/${id}`,newMission)
  }

  postMission(newMission:Mission){
    return this.http.post<Mission>(`${environment.ApiUrl}/Mission`,newMission)
  }

  deleteMissionbyid(id){
    return this.http.delete<Mission>(`${environment.ApiUrl}/Mission/${id}`)
  }
}
