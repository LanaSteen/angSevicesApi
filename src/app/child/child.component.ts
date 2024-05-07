import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() mainTitle!:string 

@Output() senSelectedCategory:EventEmitter<string> = new EventEmitter();
    selectedCategory="---"
    selectChange(value:string){
      console.log(value)
      this.senSelectedCategory.emit(value)
    }
}
