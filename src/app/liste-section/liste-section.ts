import { Component, OnInit } from '@angular/core';
import { CoursService } from '../service/cours.service';
import { Section } from '../model/section.model';
import { UpdateSection } from "../update-section/update-section";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-section',
  standalone: true,
  imports: [CommonModule, UpdateSection],
  templateUrl: './liste-section.html',
  styles: ``
})
export class ListeSection implements OnInit{
  sections!: Section[];
  updatedCat: Section = { idCat: 0, nomCat: '' };

  ajout: boolean = true;

  constructor(private coursService: CoursService) { }

  ngOnInit(): void {
    this.chargerSection();
  }

  sectionUpdated(cat: Section) {
    console.log('Cat updated event', cat);
    this.coursService.ajouterSection(cat);
    this.chargerSection();
  }

  chargerSection() {
    this.sections = this.coursService.listSection();
    console.log(this.sections);
  }

  updateCat(cat: Section) {
    // clone to avoid direct template mutation
    this.updatedCat = { ...cat };
    this.ajout = false;

  }


}
