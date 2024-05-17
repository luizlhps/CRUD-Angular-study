import { Component } from '@angular/core';
import { ThoughtService } from '../components/thoughts/thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from '../components/thoughts/interface/thought';

@Component({
  selector: 'app-update-thought',
  templateUrl: './update-thought.component.html',
  styleUrls: ['./update-thought.component.scss'],
})
export class UpdateThoughtComponent {
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

  updateThought() {
    this.service.update(this.thought).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
