import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  

  constructor() { }

  ngOnInit() {
    navSlide()
  }

}

const navSlide = ()=>{
  const burger= document.querySelector('.burger');
  const nav= document.querySelector('.nav-links');
  const navLinks= document.querySelectorAll('.nav-links li')

  burger.addEventListener('click', ()=>{

      //toggle burger
      nav.classList.toggle('nav-active');
      //animation li
      navLinks.forEach((link:any, index) => {
          if(link.style.animation){
              link.style.animation="";
          }else{
          link.style.animation = `navLinkFade 0.5s ease forwards ${index/7}s`
          }
      })
      //burger animation

      burger.classList.toggle('toggle');

  });
}