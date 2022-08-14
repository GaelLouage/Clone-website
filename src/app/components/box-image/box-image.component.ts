import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-box-image',
  templateUrl: './box-image.component.html',
  styleUrls: ['./box-image.component.css']
})
export class BoxImageComponent implements OnInit {
  @ViewChild('myModal') myModal : ElementRef;
  @ViewChild('myImg') myImg: ElementRef;
  @ViewChild('img01') img01: ElementRef;
  @ViewChild('caption') caption : ElementRef;
  @ViewChild('close') close : ElementRef;
  @ViewChild('imgBottomModal') imgBottomModal : ElementRef;
  
public theBox = [
  {
    img:"https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552aa58c3b36ca374dffe8ee_port1.jpeg",
    header:"PORTFOLIO TITLE",
    text:"Branding, web design"
  },
  {
    img:"https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552aa5cc0108cf394df63845_port2-small.jpg",
    header:"PORTFOLIO TITLE",
    text:"Branding, web design"
  },
  {
    img:"https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552aacfa416f90126f4e8596_port3-small.jpg",
    header:"PORTFOLIO TITLE",
    text:"Branding, web design"
  },
  {
    img:"https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b90f8a2ec8d8276bfb9dc_port4.jpg",
    header:"PORTFOLIO TITLE",
    text:"Branding, web design"
  },
  {
    img:"https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b910bede1286e5f007d0c_port5.jpg",
    header:"PORTFOLIO TITLE",
    text:"Branding, web design"
  },
  {
    img:"https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b9120a2ec8d8276bfb9e1_port6.jpg",
    header:"PORTFOLIO TITLE",
    text:"Branding, web design"
  },
  {
    img:"https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b912a18c4f26f5f653ab3_port7-small.jpg",
    header:"PORTFOLIO TITLE",
    text:"Branding, web design"
  },
]
  constructor() { }

  ngOnInit(): void {
  }
  public onImageClick(img:string) {
    this.myModal.nativeElement.style.display = "block";
    this.img01.nativeElement.src = img;
    this.img01.nativeElement.style.opacity = "1";
  }
  public hideModal() {
    this.myModal.nativeElement.style.display = "none";
  }
  public bottomImagesModalChanger(img:string) {
    this.img01.nativeElement.src = img;
  }
}
