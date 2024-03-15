import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector : 'app-one',
    templateUrl : './one.component.html',
    styleUrls : ['./one.component.scss']

})

export class OneComponent {
  firstName: string = '';
  lastName: string = '';
  contactOption: string = '';
  phone: string = '';
  email: string = '';

  phoneControl(): boolean {
    return this.contactOption === 'phone';
  }

  emailControl(): boolean {
    return this.contactOption === 'email';
  }
}