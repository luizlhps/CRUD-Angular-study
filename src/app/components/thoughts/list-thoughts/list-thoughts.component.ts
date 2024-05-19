import { Component, OnInit } from '@angular/core';
import { Thought } from '../interface/thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.scss'],
})
export class ListThoughtsComponent implements OnInit {
  listThoughts: Thought[] = [];
  haveMoreItens: boolean = true;
  filter: string = '';
  currentPage = 1;
  favorites: boolean = false;
  listFavorites: Thought[] = [];

  constructor(private service: ThoughtService) {}
  ngOnInit(): void {
    this.service
      .getAll(this.currentPage, this.filter, this.favorites)
      .subscribe((thoughtList) => {
        this.listThoughts = thoughtList;
      });
  }
  carryMoreItems() {
    this.service
      .getAll(++this.currentPage, this.filter, this.favorites)
      .subscribe((thoughtList) => {
        this.listThoughts.push(...thoughtList);
        console.log(thoughtList);

        if (!thoughtList.length) {
          this.haveMoreItens = false;
        }
      });
  }

  removeFavorite(thought: Thought) {
    this.listFavorites.splice(this.listFavorites.indexOf(thought), 1);
  }

  searchThought() {
    this.haveMoreItens = true;
    this.currentPage = 1;

    this.service
      .getAll(this.currentPage, this.filter, this.favorites)
      .subscribe((thoughtList) => {
        this.listThoughts = thoughtList;
      });
  }

  allFavorites() {
    this.haveMoreItens = true;
    this.currentPage = 1;
    this.favorites = true;

    this.service
      .getAll(this.currentPage, this.filter, true)
      .subscribe((thoughtList) => {
        this.listThoughts = thoughtList;
        this.listFavorites = thoughtList;
      });
  }

  getAllThought() {
    this.haveMoreItens = true;
    this.currentPage = 1;
    this.favorites = false;

    this.service
      .getAll(this.currentPage, this.filter, this.favorites)
      .subscribe((thoughtList) => {
        this.listThoughts = thoughtList;
      });
  }
}
