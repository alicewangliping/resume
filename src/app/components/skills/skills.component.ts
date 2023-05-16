import { Component } from '@angular/core';
import { Skill, skills } from './skills.data';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = skills;

}
