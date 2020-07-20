import { Component, OnInit } from '@angular/core';
import {ISuperhero} from './hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  pageTitle = 'SuperHero List';

  superheroes: ISuperhero[];
  filteredSuperHeroes: ISuperhero[];
  showImage = false;

  attrListFilter = 'This is the intial Value';

  get listFilter(): string {
      return this.attrListFilter;
  }

  set listFilter(temp: string) {
      this.attrListFilter = temp;
      this.filteredSuperHeroes = this.attrListFilter ?
      this.performFilter(this.attrListFilter) : this.superheroes;
  }

  performFilter(filterBy: string): ISuperhero[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.superheroes.filter((metahuman: ISuperhero) =>
      metahuman.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
      console.log('button clicked');
      this.showImage = !this.showImage;
  }

  starEventWasTriggered(temp: string): void {
      this.pageTitle = temp;
  }

  constructor(private heroServ: HeroService){
      this.superheroes = heroServ.getCharacters();
      this.filteredSuperHeroes = this.superheroes;
  }
  ngOnInit(): void {
  }

}
