import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-p1',
  templateUrl: './student-p1.component.html',
  styleUrls: ['./student-p1.component.css']
})
export class StudentP1Component implements OnInit {
  searchText: string;
  myStundets:Array<Student> = [
    {id: 1, name: 'lior ', fname: 'sora', score: 0},
    {id: 2, name: 'asher ', fname: 'benzion', score: 0},
    {id: 3, name: 'david ', fname: 'cohan', score: 0},
    {id: 4, name: 'david ', fname: 'mandliel', score: 0}
];

  constructor() { }
  updatescore(id,updatescore){
    this.myStundets.find(item=>item.id == id).score = updatescore
  }
  ngOnInit(): void {
  }

}
