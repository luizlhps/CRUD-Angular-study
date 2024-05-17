import { Component, OnInit } from '@angular/core';
import { RootThought, Thought } from '../interface/thought';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.scss'],
})
export class ListThoughtsComponent implements OnInit {
  listThoughts: Thought[] = [
    {
      id: 1,
      conteudo: 'Conteudo do zero ',
      autoria: 'joão zero',
      modelo: 'modelo1',
    },
    {
      id: 2,
      conteudo: 'Conteudo do x ',
      autoria: 'joão x',
      modelo: 'modelo1',
    },
  ];
  ngOnInit(): void {}
}
