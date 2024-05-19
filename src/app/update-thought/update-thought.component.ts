import { Component } from '@angular/core';
import { ThoughtService } from '../components/thoughts/thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-thought',
  templateUrl: './update-thought.component.html',
  styleUrls: ['./update-thought.component.scss'],
})
export class UpdateThoughtComponent {
  form: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autoria: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      modelo: ['modelo1'],
      favorito: [false],
    });
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
      .subscribe((thought) => this.form.patchValue(thought));
  }

  updateThought() {
    this.form.markAllAsTouched;
    if (this.form.valid) {
      this.service.update(this.form.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  verifiedForm() {
    if (this.form.valid) {
      return 'botao';
    }
    return 'botao__desabilitado';
  }
}
