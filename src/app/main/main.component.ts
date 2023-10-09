import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  text = 'GONZALO SILVA';
  typedText = '';
  isFinished = false;
  index = 0;

  ngOnInit(): void {
    this.typeText();
  }

  typeText(): void {
    if (this.index < this.text.length) {
      this.typedText += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => {
        this.typeText();
      }, 150);
    } else {
      this.isFinished = true;
    }
  }

  cursorX = -100; // Initialize off-screen
  cursorY = -100; // Initialize off-screen

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(event: MouseEvent) {
      this.cursorX = event.clientX;
      this.cursorY = event.clientY;
  }
}
