import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educations: Education[] = [
    {
      name: 'Humber College, Toronto, ON',
      degree:'certificate',
    
      startDate: 'Oct 2014',
      endDate: 'Oct 2021',
      details: [
        'Full Stack .NET Cloud Developer Bridging Program'
      ]
    },
    {
      name: 'Huazhong University of Science and Technology',
      degree:'Master degree',
      startDate: '2005',
      endDate: '2007',
      details: [
        'Master of Science in Integrated Computer Science'   ]
    },
    {
      name: 'Hebei University of Engineering',
      degree:'Bachelor degree',    
      startDate: '1996',
      endDate: '2000',
      details: [
        'Bachelor of Science in Computer Information Technology'   ]
    },
    
  ];
}

interface Education {
  name: string;
  degree:string;
  startDate: string;
  endDate: string;
  details: string[];
}
