import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Section } from '../model/section.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-section',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-section.html',
  styles: ``
})
export class UpdateSection implements OnInit {
   @Input() 
  section! : Section;

  @Output() 
  sectionUpdated = new EventEmitter<Section>();

  @Input()
  ajout!:boolean;



  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateCategorie ",this.section);
  }


  saveSection(){
      this.sectionUpdated.emit(this.section);
    }

}
