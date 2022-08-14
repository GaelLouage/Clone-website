import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-mid',
  templateUrl: './top-mid.component.html',
  styleUrls: ['./top-mid.component.css']
})
export class TopMidComponent implements OnInit {
  @ViewChild('#topMidText') topMidText : ElementRef;
  textObject = [
    {
      header: "Creative  & fresh",
      italic: "Our digital agency",
      text: "Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.",
      button: "VIEW PORTFOLIO"
    },
    {
      header: "Hip & Funky",
      italic: "We try new things",
      text: "Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.",
      button: "OUR SERVICES"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
