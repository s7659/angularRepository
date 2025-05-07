import { Component } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'students',
  // imports: [],
  templateUrl: './students.component.html',
  standalone: false,
})
export class StudentsComponent {
  students:Student[]=[{id:1,name:"yos",addres:"no",phone:1111,active:true,average:25},
                     {id:2,name:"mush",addres:"cha",phone:2222,active:true,average:50},
                     {id:3,name:"cool",addres:"tzip",phone:3333,active:true,average:98},
                     {id:4,name:"love",addres:"bi",phone:4444,active:false,average:91}]
    constructor(){}
}
