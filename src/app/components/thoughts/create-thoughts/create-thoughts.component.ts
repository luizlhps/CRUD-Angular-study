import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.scss'],
})
export class CreateThoughtsComponent implements OnInit {
  public thought = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: '',
  };

  public createThought(e: Event) {
    e.preventDefault();
    console.log(this.thought);
  }
  public cancelThought(e: Event) {
    e.preventDefault();
    console.log('cancel');
  }

  ngOnInit(): void {}
}
