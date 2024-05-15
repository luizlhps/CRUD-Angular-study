import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.scss'],
})
export class ListThoughtsComponent implements OnInit {
  listThoughts = [
    {
      conteudo: 'Conteudo do zero ',
      autoria: 'joão zero',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Conteudo do x ',
      autoria: 'joão x',
      modelo: 'modelo1',
    },
  ];
  ngOnInit(): void {}
}
