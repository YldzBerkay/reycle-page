import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {
  link = '/contents';
  expanded: any;
  mobileMenuActive = false;
  isOpened: boolean = true;
  isExpanded: boolean = true;
  private shouldClick: boolean = true;

  constructor(private location: Location) { }

  ngOnInit(): void {
    const storedValue = localStorage.getItem('expanded');

    const isSmallScreen = window.innerWidth < 768;

    if (isSmallScreen) {
      this.shouldClick = false;
      this.isExpanded = true;
      this.isOpened = false;
    } else {
      this.shouldClick = true;

      this.isExpanded = storedValue ? JSON.parse(storedValue) : true;

      this.isOpened = true;
    }
  }

  getMargin(): string {
    let setMargin = "0"; // Default value for small screens

    if (!this.isSmallScreen()) {
      setMargin = this.isExpanded ? "13.5" : "5";
    }

    return setMargin;
  }

  urlPath(url: string) {
    const path = this.location.path();
    return path.includes(url);
  }

  saveData() {
    localStorage.setItem('expanded', JSON.stringify(this.isExpanded));
  }

  isSmallScreen(): boolean {
    return window.innerWidth < 768;
  }
}
