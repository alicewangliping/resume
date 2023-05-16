import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  companies: Company[] = [
    {
      name: 'Wuhan LiTian Information Software Co.',
      startDate: 'Oct 2014',
      endDate: 'Oct 2021',
      details: [
        'Designed the Simulation Configuration Management System (SIMCMS) for nuclear simulators...',
        'Developed Front end, Back end and client applications for SIMCMS utilizing C#, MSSQL, JavaScript, python, and MySQL.',
        'Successfully launched, maintained and upgraded SIMCMS, and trained users for 10 nuclear power stations throughout the years.'
      ]
    },
    {
      name: 'China Nuclear Power Operation Technology Corp',
      startDate: 'Aug 2007',
      endDate: 'Sep 2014',
      details: [
        'Developed and implemented DR tracking management system to track bugs of Simulator ',
        'development test and design differences leveraging C#, MSSQL, Net, and JavaScript.',
        'Consistently upgraded and maintained the system for over 10 years. '
     ]
    },
    // Add more company objects as needed
  ];
}

interface Company {
  name: string;
  startDate: string;
  endDate: string;
  details: string[];
}
