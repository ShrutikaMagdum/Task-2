import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss'
})
export class TwoComponent {
  selectedOption : string = '';
  firstName: string = '';
  lastName: string = '';
  contactOption: string = '';
  phone: string = '';
  email: string = '';

  toggleControls(){
    if (this.selectedOption !== 'phone'){
      this.phone = '';
    }
    if (this.selectedOption !== 'email'){
      this.email = '';
  }
}
}
