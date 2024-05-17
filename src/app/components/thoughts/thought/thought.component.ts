import { Component, Input, OnInit } from '@angular/core';
import { Thought } from '../interface/thought';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss'],
})
export class ThoughtComponent implements OnInit {
  @Input() thought: Thought = {
    id: 1,
    conteudo: 'Conteudo do ',
    autoria: 'joão ',
    modelo: 'modelo3',
  };

  ngOnInit(): void {}

  larguraPensamento(): string {
    if (this.thought.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
