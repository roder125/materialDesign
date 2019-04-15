import {Component, HostListener, OnInit} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  menu: HTMLElement;
  logo: HTMLElement;
  title: HTMLElement;
  introOffsetHeight: number;

  constructor() { }

  ngOnInit() {
    this.getHTMLElements();
  }

  getHTMLElements(){
    this.menu = document.getElementById("menu");
    let menuHeight = this.menu.clientHeight;
    this.logo = document.getElementById("logo");
    this.title = document.getElementById("title");
    this.introOffsetHeight = document.getElementById("intro").getBoundingClientRect().top - menuHeight + 5;
    console.log(this.introOffsetHeight)
  }

  changeMenu(scroll: number){
    if(scroll >= this.introOffsetHeight){
      this.menu.classList.add("fixed-menu");
      this.logo.classList.add("hide-logo");
      this.title.classList.add("show-title");
    }
    else{
      this.menu.classList.remove("fixed-menu");
      this.logo.classList.remove("hide-logo");
      this.title.classList.remove("show-title");
    }
  }

  onScroll(event){
    this.changeMenu(event.target.scrollTop);
  }
}
