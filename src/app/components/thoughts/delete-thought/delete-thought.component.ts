import { Thought } from './../interface/thought';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.scss'],
})
export class DeleteThoughtComponent {
  thought: Thought = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  deleteThought() {
    if (this.thought.id) {
      this.service.delete(this.thought.id).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const idNumber = parseInt(id ? id : '');

    if (isNaN(idNumber)) {
      console.error('Invalid ID');
      return;
    }

    this.service
      .findById(idNumber)
      .subscribe((thought) => (this.thought = thought));
  }
}
