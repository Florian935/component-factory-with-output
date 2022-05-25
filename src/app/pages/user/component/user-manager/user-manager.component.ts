import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ViewContainerDirective } from 'src/app/shared/directive/view-container.directive';
import { UserInformationFormComponent } from '../user-information-form/user-information-form.component';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss'],
})
export class UserManagerComponent implements OnInit {
  @ViewChild(ViewContainerDirective, { static: false })
  private _viewContainerDirective!: ViewContainerDirective;
  private _informationGroups: FormGroup[] = [];

  constructor() {}

  ngOnInit(): void {}

  onReceiveInformationForm(informationForm: FormGroup): void {
    this._informationGroups.push(informationForm);
  }

  onAddUserInformation(): void {
    const component =
      this._viewContainerDirective.viewContainerRef.createComponent(
        UserInformationFormComponent
      );
    component.instance.informationFormEmitter.subscribe(
      (informationForm: FormGroup) =>
        this._informationGroups.push(informationForm)
    );
  }

  log(): void {
    console.log(this._informationGroups);
  }
}
