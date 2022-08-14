import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { fromEvent, interval, Observable, Subscription } from "rxjs";
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  headerTextTop:string[] = ["<p>We can change <br> Your digital world</p>",
                            "You need a good partner",
                             "Shoot for the hoop!"]
  headerTextBottom:string[] = ["Bold enough to blow a hole in your next marketing campain",
                              "Let us help you realise your true potential",
                              "Aiming low is not an option for us"];
  headerImages:string[] = ["(https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/5527a395e02754bb57746389_slider1.jpg",
                          "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55299d1b0108cf394df61d5a_sheep.jpeg",
                          "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55299e51264213136f7d6a43_hoop.jpg"];
  width = document.body.offsetWidth;
  brandLogo:string[] = ['assets/Images/icon.png','assets/Images/icon-black.png'];
  thelogo:string = this.brandLogo[0];
  HeaderToptext:string = this.headerTextTop[0];
  topTextBottom:string = this.headerTextBottom[0];
  @ViewChild('logo') logo : ElementRef;
  @ViewChild('theNav') theNav : ElementRef;
  @ViewChild('hamburger') hamburger: ElementRef;
  @ViewChild('topTekst') topTekst : ElementRef;
  @ViewChild('topNav') topNav : ElementRef;
  timer:any;
  //toptekst
  //@ViewChild('#topTekstHeader') topTekstHeader : ElementRef;
  //@ViewChild('#topTekstFooter') topTekstFooter : ElementRef;
  hamburgerBar:string = "hamburgerBar";
  constructor(private elem: ElementRef){}
 
  // event on screen resize logo changer
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  ngOnInit() {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      if( document.body.offsetWidth < 1000) {
        this.logo.nativeElement.src = this.brandLogo[1];
        this.theNav.nativeElement.style.display = "none";
        this.topTekst.nativeElement.style.display = "grid";
        this.hamburgerColor("white");
      } else {
        this.topNav.nativeElement.style.backgroundImage = "url(https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/5527a395e02754bb57746389_slider1.jpg)";
        this.logo.nativeElement.src = this.brandLogo[0];
        this.theNav.nativeElement.style.display = "flex";
        this.hamburger.nativeElement.style.transform = "rotate(180deg)"
        this.topTekst.nativeElement.style.display = "grid";
        this.hamburgerColor("black");
      }
    });

   
      this.startTimer();
   
}


ngOnDestroy() {
  this.resizeSubscription$.unsubscribe()
}

hamburgerClick() {
    this.theNav.nativeElement.style.display = "inline";
    if(this.hamburger.nativeElement.style.transform == "rotate(90deg)") {
      this.hamburger.nativeElement.style.transform = "rotate(180deg)";
      this.theNav.nativeElement.style.display = "none";
      this.topTekst.nativeElement.style.display = "grid";
      this.topNav.nativeElement.style.backgroundImage = "url(https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/5527a395e02754bb57746389_slider1.jpg)";
      this.hamburgerColor("white");
    } else {
      this.theNav.nativeElement.style.display = "inline";
      this.logo.nativeElement.src = this.brandLogo[1];
      this.hamburger.nativeElement.style.transform = "rotate(90deg)"
      this.topTekst.nativeElement.style.display = "none";
      this.topNav.nativeElement.style.backgroundImage = "none";
      this.hamburgerColor("black");
    }
  }
  hamburgerColor(color:string) {
    this.elem.nativeElement.querySelectorAll(".hamburgerBar")[0].style.backgroundColor=color;
    this.elem.nativeElement.querySelectorAll(".hamburgerBar")[1].style.backgroundColor=color;
    this.elem.nativeElement.querySelectorAll(".hamburgerBar")[2].style.backgroundColor=color;
  }

  startTimer() {
    this.stopTimer();
    this.timer = setInterval(() => { 
      if(this.hamburger.nativeElement.style.transform == "rotate(180deg)") {
        switch(this.HeaderToptext) {
          case this.headerTextTop[0]:
            this.HeaderToptext = this.headerTextTop[1];
            this.topTextBottom = this.headerTextBottom[1];
            this.topNav.nativeElement.style.backgroundImage = `url(${this.headerImages[1]})`;
            break;
         case this.headerTextTop[1]:
             this.HeaderToptext = this.headerTextTop[2];
            this.topTextBottom = this.headerTextBottom[2];
            this.topNav.nativeElement.style.backgroundImage = `url(${this.headerImages[2]})`;
            break;
          case this.headerTextTop[2]:
            this.HeaderToptext = this.headerTextTop[0];
            this.topTextBottom = this.headerTextBottom[0];
            this.topNav.nativeElement.style.backgroundImage = `url(${this.headerImages[0]})`;
            break;
          default:
            console.log("tekst not found");
            break;
        }
      }
     
     }, 3000);
  }
  
  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

