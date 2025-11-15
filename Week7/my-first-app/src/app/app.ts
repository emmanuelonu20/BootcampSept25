import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Robogarden');
  name = 'John Wick';
  studentNames = ['Jheteas', 'Michael', 'Bilal', 'Staphanie', 'Renan', 'Malek'];
  imageUrl="https://smartcdn.gprod.postmedia.digital/calgaryherald/wp-content/uploads/2018/06/tower-3.jpg";
  numColSpan=2;
  blueClass = 'purple';
  bgColor = 'orange';
  hasError: boolean = false;
  currentTab = 11;

  //constructor


  //methods
  showTowerImage(){
    this.imageUrl = "https://smartcdn.gprod.postmedia.digital/calgaryherald/wp-content/uploads/2018/06/tower-3.jpg";
  }

  showPeaceBridge(){
    this.imageUrl = "https://i0.wp.com/takemytrip.com/wp-content/uploads/2015/11/1050_peacebridge.jpg?fit=1050%2C600&ssl=1";
  }
}
