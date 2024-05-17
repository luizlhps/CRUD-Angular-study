import { Thought } from './../interface/thought';
import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.scss'],
})
export class CreateThoughtsComponent implements OnInit {
  public thought: Thought = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(private service: ThoughtService, private router: Router) {}

  public createThought(e: Event) {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {}
}
