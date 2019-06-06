import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  buttonName: string = 'My button';
  i = 0;
  spinnerMode: string = 'determinate';
  spinnerValue = 50;
  btnEnable: boolean = true;
  selectDisabled: boolean  = false;
  selectedOption = 1;
  inputName:string = "John";

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log('click');
  }

  inc() {
    this.i++;
    this.buttonName = `It was clicked ${this.i} times`;
    this.spinnerValue = this.i;
  }

  disabled() {
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";

    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 3000);
  }

  cbCheckboxChange(event){
    this.selectDisabled = event.checked;
  }

  selectionChange(event){
    this.selectedOption = event.value;
  }

  // inputEvent(event){
  //   console.log(event.target.value);
  // }
}
