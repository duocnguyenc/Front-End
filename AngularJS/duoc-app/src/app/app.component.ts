import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Member';
  members: any[] = [];
  formRegister: any;
  teams: Array<string>;

  constructor(private fb: FormBuilder) {
    this.teams = ['FE', 'Ruby', 'PHP'];
    this.formRegister = this.fb.group({
      personal: new FormGroup({
        avatar: new FormControl(),
        name: new FormControl('',[Validators.required]),
        birthday: new FormControl()
      }),
      company: new FormGroup({
        team: new FormControl('',[Validators.required]),
        joined : new FormControl('',[Validators.required])
      }),
      skills: new FormControl()
    });
  }
  ngOnInit() {
    this.formRegister.controls.company.controls.team.valueChanges.subscribe(
      (value: string) => {
        switch (value) {
          case "Ruby":
            this.formRegister.setControl('skill', new FormControl('', [Validators.required, this.checkSkillRuby]));
            break;
          case "PHP":
            this.formRegister.setControl('skill', new FormControl('', [Validators.required, this.checkSkillPhp]));
            break;
          default:
            this.formRegister.setControl('skill', new FormControl('', [Validators.required, this.checkSkillFe]));
            break;
        }
      console.log(value);
      }
    );
  }
  checkSkillRuby = (input: FormControl) => {
    return this.checkSkillsByTeam(input, 'Ruby'.toLocaleLowerCase());
  }

  checkSkillFe = (input: FormControl) => {
    return this.checkSkillsByTeam(input, 'Fe'.toLocaleLowerCase());
  }

  checkSkillPhp = (input: FormControl) => {
    return this.checkSkillsByTeam(input, 'PHP'.toLocaleLowerCase())
  }
  checkSkillsByTeam(input: FormControl, prerequisite: string) {
    const ind = input.value.indexOf(prerequisite) < 0;
    return ind ? { skillInvalid: true } : null
  }

  addMember() {
      this.members.push(this.formRegister.value);
      console.log(this.formRegister.value);
  }
}
