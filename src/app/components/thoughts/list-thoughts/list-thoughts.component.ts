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

  constructor(private service: ThoughtService) {}
  ngOnInit(): void {
    this.service
      .getAll(this.currentPage, this.filter)
      .subscribe((thoughtList) => {
        this.listThoughts = thoughtList;
      });
  }
  carryMoreItems() {
    this.service
      .getAll(++this.currentPage, this.filter)
      .subscribe((thoughtList) => {
        this.listThoughts.push(...thoughtList);
        console.log(thoughtList);

        if (!thoughtList.length) {
          this.haveMoreItens = false;
        }
      });
  }

  searchThought() {
    this.haveMoreItens = true;
    this.currentPage = 1;

    this.service
      .getAll(this.currentPage, this.filter)
      .subscribe((thoughtList) => {
        this.listThoughts = thoughtList;
      });
  }
}
