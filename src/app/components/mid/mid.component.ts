import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-mid',
  templateUrl: './mid.component.html',
  styleUrls: ['./mid.component.css']
})
export class MidComponent implements OnInit {

  constructor() { }
  public box= [
    {
      number: 342,
      text: "Cups of coffee",
    },
    {
      number: 756,
      text: "Bicycle kilometers",
    },
    {
      number: 419,
      text: "Brainstorm session",
    },
    {
      number: 284,
      text: "Video hours",
    },
  ]
 public boxDrie = [
    {
      image: "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55290faf53ab13dd4effe909_interface34.svg",
      header: "Branding",
      text: "Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. "
    },
    {
      image: "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55299a803b36ca374dffd8d3_picture.svg",
      header: "Web Design",
      text: "Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. "
    },
    {
      image: "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55299a803b36ca374dffd8d3_picture.svg",
      header: "Graphic Design",
      text: "Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. "
    },
 ]
 
  ngOnInit(): void {
  }

}
