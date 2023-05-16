import { Component } from '@angular/core';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  comments='';
  banner = {
    heading: "LIPING WANG!",
    subHeading: ".Net  Developer, Tester",
    hirB: "Hire Me   ",
    downB: "Download CV",
 
    url: "https://www.amazon.ca/"
  }

  handleClick() {
    console.log("clicked the button")
  }
}
