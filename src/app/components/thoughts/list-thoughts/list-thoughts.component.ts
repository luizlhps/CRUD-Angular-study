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

  constructor(private service: ThoughtService) {}
  ngOnInit(): void {
    this.service.getAll().subscribe((thoughtList) => {
      console.log(thoughtList);

      this.listThoughts = thoughtList;
    });
  }
}
