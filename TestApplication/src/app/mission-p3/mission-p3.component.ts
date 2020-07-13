import { Component, OnInit } from '@angular/core';
import { Mission } from '../mission';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-mission-p3',
  templateUrl: './mission-p3.component.html',
  styleUrls: ['./mission-p3.component.css']
})
export class MissionP3Component implements OnInit {
  missions:Mission[];
  constructor(private apiservice:ApiserviceService) { }

  loadMissions(){
    this.apiservice.getallMission().subscribe(ele => this.missions =ele);
  }
  postmission(title,date,description){
    this.apiservice.postMission({missionname:`${title}`,misiondescription:`${date}`,missiondate:`${description}`}).subscribe(data=>{
      console.log(data)
    })
  }
  removemission(id){
    this.apiservice.deleteMissionbyid(id)
  }
  updatemission(id,title,date,description){
    this.apiservice.putMissionbyid(id,{missionname:`${title}`,misiondescription:`${date}`,missiondate:`${description}`}).subscribe(data=>{
      console.log(data)
    })
  }
  ngOnInit(): void {
    this.loadMissions()
  }

}
