import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})

export class PropertyBindingComponent implements OnInit {
  colorBtn: string = "accent";
  btnDisabled: boolean = true;

  colors = ['primary', 'accent', 'warn', ''];
  i = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.i = (this.i + 1) % this.colors.length;

    }, 1000);
  }

}
