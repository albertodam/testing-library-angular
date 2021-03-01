import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-second-test',
  templateUrl: './second-test.component.html',
  styleUrls: ['./second-test.component.scss']
})
export class SecondTestComponent implements OnInit {

  name: string;
  grettingForm: FormGroup;
  gretting: string;

  constructor(private readonly formBuilder: FormBuilder) {
    this.grettingForm = this.formBuilder.group({
      name: ['']
    })
  }

  ngOnInit(): void {
  }

  grettingMe(): void {
    this.gretting = `Hola, ${this.grettingForm.controls.name.value}`;
  }

}
