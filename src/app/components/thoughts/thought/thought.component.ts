import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Thought } from '../interface/thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss'],
})
export class ThoughtComponent implements OnInit, OnChanges {
  @Input() thought: Thought = {
    id: 1,
    conteudo: 'Conteudo do ',
    autoria: 'joão ',
    modelo: 'modelo3',
    favorito: false,
  };

  @Input() listFavorites!: Thought[];
  @Output() removeFavorite = new EventEmitter();

  constructor(private service: ThoughtService) {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  favoriteItem() {
    this.service.updateFavorite(this.thought).subscribe(() => {});
    this.removeFavorite.emit();
  }

  larguraPensamento(): string {
    if (this.thought.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  updateIconFavorite(): string {
    if (!this.thought.favorito) {
      return 'inativo';
    }
    return 'ativo';
  }
}
